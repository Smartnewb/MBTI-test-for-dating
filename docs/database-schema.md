# MBTI Dating Test Application Database Schema

## Overview

This document outlines the database schema for the MBTI Dating Test application. The application allows users to take an MBTI personality test without requiring registration, view their results, and optionally save their profile.

## Tables

### 1. mbti_questions

Stores all MBTI test questions.

| Column     | Type      | Description                             |
| ---------- | --------- | --------------------------------------- |
| id         | SERIAL    | Primary key                             |
| question   | TEXT      | The question text                       |
| option_a   | TEXT      | First answer option                     |
| option_b   | TEXT      | Second answer option                    |
| dimension  | TEXT      | MBTI dimension (E-I, S-N, T-F, J-P)     |
| direction  | TEXT      | Question direction (positive, negative) |
| created_at | TIMESTAMP | Creation timestamp                      |

### 2. user_responses

Tracks user responses to MBTI questions.

| Column      | Type      | Description                       |
| ----------- | --------- | --------------------------------- |
| id          | SERIAL    | Primary key                       |
| user_id     | UUID      | Optional reference to profiles.id |
| question_id | INTEGER   | Reference to mbti_questions.id    |
| response    | INTEGER   | User's response (1-5 scale)       |
| created_at  | TIMESTAMP | Creation timestamp                |

**Note:** The current schema needs to be updated to include a session_id column for anonymous users.

### 3. mbti_types

Stores information about each MBTI personality type.

| Column       | Type       | Description                                  |
| ------------ | ---------- | -------------------------------------------- |
| id           | SERIAL     | Primary key                                  |
| type_code    | VARCHAR(4) | MBTI type code (e.g., INFJ, ESTP)            |
| type_name    | VARCHAR    | Name of the type in Korean                   |
| description  | TEXT       | Detailed description of the personality type |
| strengths    | TEXT[]     | Array of strengths for this type             |
| weaknesses   | TEXT[]     | Array of weaknesses for this type            |
| dating_style | TEXT       | Description of dating style                  |
| color        | VARCHAR    | Color associated with this type              |
| created_at   | TIMESTAMP  | Creation timestamp                           |

### 4. mbti_compatibility

Stores compatibility information between different MBTI types.

| Column              | Type    | Description                      |
| ------------------- | ------- | -------------------------------- |
| id                  | SERIAL  | Primary key                      |
| type1               | TEXT    | First MBTI type                  |
| type2               | TEXT    | Second MBTI type                 |
| compatibility_score | INTEGER | Compatibility score (1-100)      |
| description         | TEXT    | Description of the compatibility |

### 5. test_results

Stores the results of completed MBTI tests.

| Column              | Type      | Description                                |
| ------------------- | --------- | ------------------------------------------ |
| id                  | SERIAL    | Primary key                                |
| user_id             | UUID      | Optional reference to auth.users.id        |
| mbti_type           | VARCHAR   | Resulting MBTI type                        |
| e_i_score           | INTEGER   | E-I dimension score                        |
| s_n_score           | INTEGER   | S-N dimension score                        |
| t_f_score           | INTEGER   | T-F dimension score                        |
| j_p_score           | INTEGER   | J-P dimension score                        |
| created_at          | TIMESTAMP | Creation timestamp                         |
| session_id          | UUID      | Anonymous session ID                       |
| email               | VARCHAR   | Optional email for result sharing          |
| share_id            | UUID      | Unique ID for sharing results              |
| reliability         | INTEGER   | Result reliability score (0-100%)          |
| completeness        | INTEGER   | Response completeness score (0-100%)       |
| e_score             | NUMERIC   | E score                                    |
| i_score             | NUMERIC   | I score                                    |
| s_score             | NUMERIC   | S score                                    |
| n_score             | NUMERIC   | N score                                    |
| t_score             | NUMERIC   | T score                                    |
| f_score             | NUMERIC   | F score                                    |
| j_score             | NUMERIC   | J score                                    |
| p_score             | NUMERIC   | P score                                    |
| dimension_certainty | JSONB     | Detailed certainty data for each dimension |
| confidence_score    | INTEGER   | Overall confidence score (0-100%)          |
| confidence_level    | VARCHAR   | Confidence level category                  |
| confidence_factors  | JSONB     | Detailed confidence analysis factors       |

### 6. profiles

Stores optional user profiles.

| Column     | Type      | Description           |
| ---------- | --------- | --------------------- |
| id         | UUID      | Primary key           |
| username   | TEXT      | Optional username     |
| full_name  | TEXT      | Optional full name    |
| mbti_type  | TEXT      | User's MBTI type      |
| created_at | TIMESTAMP | Creation timestamp    |
| updated_at | TIMESTAMP | Last update timestamp |

## Relationships

1. user_responses.user_id → profiles.id
2. user_responses.question_id → mbti_questions.id
3. test_results.mbti_type → mbti_types.type_code
4. test_results.user_id → auth.users.id
5. profiles.id → auth.users.id

## Required Schema Updates

1. Add session_id to user_responses table for anonymous users
2. Update user_responses to use A/B answers instead of 1-5 scale
3. Add constraints to ensure either user_id or session_id is provided
4. Add indexes for common query patterns
5. Implement Row Level Security (RLS) policies for data privacy

## Row Level Security (RLS)

All tables have RLS enabled with the following policies:

1. Everyone can view mbti_questions, mbti_types, and mbti_compatibility
2. Users can only view and modify their own responses and test results
3. Anonymous users can access their data via session_id
