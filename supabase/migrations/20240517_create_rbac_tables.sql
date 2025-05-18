-- Create roles table
CREATE TABLE IF NOT EXISTS public.roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create permissions table
CREATE TABLE IF NOT EXISTS public.permissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  resource VARCHAR(50) NOT NULL,
  action VARCHAR(50) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE(resource, action)
);

-- Create role_permissions table (many-to-many relationship)
CREATE TABLE IF NOT EXISTS public.role_permissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  role_id UUID REFERENCES public.roles(id) ON DELETE CASCADE NOT NULL,
  permission_id UUID REFERENCES public.permissions(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE(role_id, permission_id)
);

-- Create user_roles table (many-to-many relationship)
CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  role_id UUID REFERENCES public.roles(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE(user_id, role_id)
);

-- Create triggers to update updated_at column
CREATE TRIGGER update_roles_updated_at
BEFORE UPDATE ON public.roles
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_permissions_updated_at
BEFORE UPDATE ON public.permissions
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Create RLS policies
ALTER TABLE public.roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.role_permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Policy for users to view roles
CREATE POLICY "Users can view roles" ON public.roles
  FOR SELECT
  USING (true);

-- Policy for users to view permissions
CREATE POLICY "Users can view permissions" ON public.permissions
  FOR SELECT
  USING (true);

-- Policy for users to view role permissions
CREATE POLICY "Users can view role permissions" ON public.role_permissions
  FOR SELECT
  USING (true);

-- Policy for users to view their own roles
CREATE POLICY "Users can view own roles" ON public.user_roles
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy for admins to manage roles
CREATE POLICY "Admins can manage roles" ON public.roles
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      JOIN public.user_roles ON user_roles.user_id = auth.users.id
      JOIN public.roles ON roles.id = user_roles.role_id
      WHERE auth.users.id = auth.uid()
      AND roles.name = 'admin'
    )
  );

-- Policy for admins to manage permissions
CREATE POLICY "Admins can manage permissions" ON public.permissions
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      JOIN public.user_roles ON user_roles.user_id = auth.users.id
      JOIN public.roles ON roles.id = user_roles.role_id
      WHERE auth.users.id = auth.uid()
      AND roles.name = 'admin'
    )
  );

-- Policy for admins to manage role permissions
CREATE POLICY "Admins can manage role permissions" ON public.role_permissions
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      JOIN public.user_roles ON user_roles.user_id = auth.users.id
      JOIN public.roles ON roles.id = user_roles.role_id
      WHERE auth.users.id = auth.uid()
      AND roles.name = 'admin'
    )
  );

-- Policy for admins to manage user roles
CREATE POLICY "Admins can manage user roles" ON public.user_roles
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      JOIN public.user_roles ON user_roles.user_id = auth.users.id
      JOIN public.roles ON roles.id = user_roles.role_id
      WHERE auth.users.id = auth.uid()
      AND roles.name = 'admin'
    )
  );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS role_permissions_role_id_idx ON public.role_permissions (role_id);
CREATE INDEX IF NOT EXISTS role_permissions_permission_id_idx ON public.role_permissions (permission_id);
CREATE INDEX IF NOT EXISTS user_roles_user_id_idx ON public.user_roles (user_id);
CREATE INDEX IF NOT EXISTS user_roles_role_id_idx ON public.user_roles (role_id);

-- Insert default roles
INSERT INTO public.roles (name, description)
VALUES 
  ('admin', 'Administrator with full access'),
  ('user', 'Regular user with limited access'),
  ('guest', 'Guest user with minimal access')
ON CONFLICT (name) DO NOTHING;

-- Insert default permissions
INSERT INTO public.permissions (name, description, resource, action)
VALUES 
  ('view_users', 'View users', 'users', 'read'),
  ('manage_users', 'Manage users', 'users', 'write'),
  ('view_profiles', 'View profiles', 'profiles', 'read'),
  ('manage_profiles', 'Manage profiles', 'profiles', 'write'),
  ('view_mbti_data', 'View MBTI data', 'mbti', 'read'),
  ('manage_mbti_data', 'Manage MBTI data', 'mbti', 'write')
ON CONFLICT (resource, action) DO NOTHING;

-- Assign permissions to roles
WITH 
  admin_role AS (SELECT id FROM public.roles WHERE name = 'admin'),
  user_role AS (SELECT id FROM public.roles WHERE name = 'user'),
  guest_role AS (SELECT id FROM public.roles WHERE name = 'guest'),
  view_users_perm AS (SELECT id FROM public.permissions WHERE name = 'view_users'),
  manage_users_perm AS (SELECT id FROM public.permissions WHERE name = 'manage_users'),
  view_profiles_perm AS (SELECT id FROM public.permissions WHERE name = 'view_profiles'),
  manage_profiles_perm AS (SELECT id FROM public.permissions WHERE name = 'manage_profiles'),
  view_mbti_data_perm AS (SELECT id FROM public.permissions WHERE name = 'view_mbti_data'),
  manage_mbti_data_perm AS (SELECT id FROM public.permissions WHERE name = 'manage_mbti_data')
INSERT INTO public.role_permissions (role_id, permission_id)
VALUES 
  -- Admin permissions
  ((SELECT id FROM admin_role), (SELECT id FROM view_users_perm)),
  ((SELECT id FROM admin_role), (SELECT id FROM manage_users_perm)),
  ((SELECT id FROM admin_role), (SELECT id FROM view_profiles_perm)),
  ((SELECT id FROM admin_role), (SELECT id FROM manage_profiles_perm)),
  ((SELECT id FROM admin_role), (SELECT id FROM view_mbti_data_perm)),
  ((SELECT id FROM admin_role), (SELECT id FROM manage_mbti_data_perm)),
  
  -- User permissions
  ((SELECT id FROM user_role), (SELECT id FROM view_profiles_perm)),
  ((SELECT id FROM user_role), (SELECT id FROM view_mbti_data_perm)),
  
  -- Guest permissions
  ((SELECT id FROM guest_role), (SELECT id FROM view_mbti_data_perm))
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Create function to check if user has permission
CREATE OR REPLACE FUNCTION public.has_permission(
  user_id UUID,
  permission_name TEXT
)
RETURNS BOOLEAN AS $$
DECLARE
  has_perm BOOLEAN;
BEGIN
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles ur
    JOIN public.role_permissions rp ON rp.role_id = ur.role_id
    JOIN public.permissions p ON p.id = rp.permission_id
    WHERE ur.user_id = $1
    AND p.name = $2
  ) INTO has_perm;
  
  RETURN has_perm;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
