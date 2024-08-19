-- Connect to the desired database
\c postgres;

-- Create the ecommerce database with specific settings
CREATE DATABASE ecommerce_db
WITH OWNER = your_user
ENCODING = 'UTF8'
CONNECTION LIMIT = -1;
