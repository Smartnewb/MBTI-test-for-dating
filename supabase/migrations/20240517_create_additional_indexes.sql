-- Create additional indexes for performance optimization

-- Composite indexes for user_responses
CREATE INDEX IF NOT EXISTS user_responses_user_session_idx ON public.user_responses (user_id, session_id);
CREATE INDEX IF NOT EXISTS user_responses_session_question_idx ON public.user_responses (session_id, question_id);

-- Composite indexes for test_results
CREATE INDEX IF NOT EXISTS test_results_user_created_idx ON public.test_results (user_id, created_at);
CREATE INDEX IF NOT EXISTS test_results_type_created_idx ON public.test_results (mbti_type, created_at);

-- Indexes for timestamp columns for time-based queries
CREATE INDEX IF NOT EXISTS users_created_at_idx ON public.users (created_at);
CREATE INDEX IF NOT EXISTS users_last_login_idx ON public.users (last_login);
CREATE INDEX IF NOT EXISTS profiles_updated_at_idx ON public.profiles (updated_at);
CREATE INDEX IF NOT EXISTS questions_updated_at_idx ON public.questions (updated_at);
CREATE INDEX IF NOT EXISTS mbti_types_updated_at_idx ON public.mbti_types (updated_at);

-- Partial indexes for common query patterns
CREATE INDEX IF NOT EXISTS active_users_idx ON public.users (id) WHERE status = 'active';
CREATE INDEX IF NOT EXISTS recent_test_results_idx ON public.test_results (created_at) WHERE created_at > (now() - interval '30 days');

-- GIN index for JSONB data
CREATE INDEX IF NOT EXISTS profiles_preferences_idx ON public.profiles USING GIN (preferences);

-- Text search indexes
CREATE INDEX IF NOT EXISTS questions_text_search_idx ON public.questions USING GIN (to_tsvector('korean', question_text));
CREATE INDEX IF NOT EXISTS mbti_types_description_search_idx ON public.mbti_types USING GIN (to_tsvector('korean', description));

-- Functional indexes for case-insensitive searches
CREATE INDEX IF NOT EXISTS users_email_lower_idx ON public.users (lower(email));
CREATE INDEX IF NOT EXISTS users_username_lower_idx ON public.users (lower(username));

-- Indexes for foreign keys that aren't primary keys
CREATE INDEX IF NOT EXISTS compatibility_type1_type2_idx ON public.compatibility (type1, type2);
CREATE INDEX IF NOT EXISTS compatibility_score_idx ON public.compatibility (compatibility_score);

-- Analyze tables to update statistics for query planner
ANALYZE public.users;
ANALYZE public.profiles;
ANALYZE public.questions;
ANALYZE public.user_responses;
ANALYZE public.mbti_types;
ANALYZE public.compatibility;
ANALYZE public.test_results;
ANALYZE public.roles;
ANALYZE public.permissions;
ANALYZE public.role_permissions;
ANALYZE public.user_roles;
