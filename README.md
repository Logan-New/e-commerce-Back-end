## E-Commerce Backend
# Table of Contents
# Description
# Installation
# Usage
# Routes
# Category Routes
# Product Routes
# Tag Routes
# Database Models
# Category
# Product
# Tag
# ProductTag
# Seeding the Database
# Environment Variables
# License
# Contributing
# Questions
## Description
This project is a backend for an e-commerce platform, built using Node.js, Express, Sequelize, and PostgreSQL. The API allows you to perform CRUD operations on products, categories, and tags. It is designed to handle a robust relational database with models for products, categories, tags, and the relationships between them.

Installation
Prerequisites
Before you begin, ensure you have the following installed on your local machine:

Node.js (v14 or higher)
PostgreSQL (v12 or higher)
npm (v6 or higher)
Steps
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend
Install Dependencies:

Install all necessary npm packages:

bash
Copy code
npm install
Set Up Environment Variables:

Create a .env file in the root directory of your project with the following content:

plaintext
Copy code
DB_NAME=ecommerce_db
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_URL=optional_database_url_if_using_remote_db
Replace your_postgres_username and your_postgres_password with your actual PostgreSQL credentials.

Create the Database:

Use PostgreSQL to create the ecommerce_db database:

bash
Copy code
psql -U your_postgres_username -d ecommerce_db -f db/schema.sql
Seed the Database:

Populate the database with seed data:

bash
Copy code
npm run seed
Start the Server:

Start the Express server:

bash
Copy code
npm start
The server should now be running on http://localhost:3001.

Usage
This backend serves as the API for an e-commerce application. You can interact with the API using tools like Insomnia or Postman. The API provides routes to perform CRUD operations on categories, products, and tags.

Routes
Category Routes
GET /api/categories: Get all categories, including associated products.
GET /api/categories/:id: Get a single category by ID, including associated products.
POST /api/categories: Create a new category.
PUT /api/categories/:id: Update a category by ID.
DELETE /api/categories/:id: Delete a category by ID.
Product Routes
GET /api/products: Get all products, including associated categories and tags.
GET /api/products/:id: Get a single product by ID, including associated categories and tags.
POST /api/products: Create a new product. Accepts a JSON body with product_name, price, stock, category_id, and an array of tagIds.
PUT /api/products/:id: Update a product by ID. Accepts a JSON body with product_name, price, stock, category_id, and an array of tagIds.
DELETE /api/products/:id: Delete a product by ID.
Tag Routes
GET /api/tags: Get all tags, including associated products.
GET /api/tags/:id: Get a single tag by ID, including associated products.
POST /api/tags: Create a new tag.
PUT /api/tags/:id: Update a tag by ID.
DELETE /api/tags/:id: Delete a tag by ID.
Database Models
Category
Represents a product category.

id: Integer, Primary Key, Auto Increment
category_name: String, Not Null
Product
Represents a product.

id: Integer, Primary Key, Auto Increment
product_name: String, Not Null
price: Decimal, Not Null
stock: Integer, Not Null, Default Value: 10
category_id: Integer, Foreign Key referencing Category
Tag
Represents a tag associated with a product.

id: Integer, Primary Key, Auto Increment
tag_name: String
ProductTag
Junction table for many-to-many relationship between products and tags.

id: Integer, Primary Key, Auto Increment
product_id: Integer, Foreign Key referencing Product
tag_id: Integer, Foreign Key referencing Tag
Seeding the Database
The database can be populated with initial data using the seed scripts provided. Run the following command to seed the database:

bash
Copy code
npm run seed
This will populate the Categories, Products, Tags, and ProductTags tables with sample data.

Environment Variables
The application uses the following environment variables:

DB_NAME: The name of the PostgreSQL database (e.g., ecommerce_db).
DB_USER: Your PostgreSQL username.
DB_PASSWORD: Your PostgreSQL password.
DB_URL (optional): The full URL to a remote database (if applicable).
These should be stored in a .env file in the root directory of the project.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

