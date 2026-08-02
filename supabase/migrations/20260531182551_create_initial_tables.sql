-- Create Categories Table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create Fragrances Table
CREATE TABLE fragrances (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create Colors Table
CREATE TABLE colors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create Products Table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INT REFERENCES categories(id) ON DELETE CASCADE,
    weight_grams INT,
    base_price NUMERIC(10, 2),
    height_cm NUMERIC(5, 2),
    width_cm NUMERIC(5, 2),
    diameter_cm NUMERIC(5, 2),
    length_cm NUMERIC(5, 2),
    customization_allowed BOOLEAN NOT NULL DEFAULT TRUE,
    description TEXT
);

-- Create Tiered Pricing Table
CREATE TABLE tiered_pricing (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    min_quantity INT NOT NULL,
    max_quantity INT,
    unit_price NUMERIC(10, 2) NOT NULL
);

-- Create Packaging Options Table
CREATE TABLE packaging_options (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    type VARCHAR(50),
    additional_cost NUMERIC(10, 2) NOT NULL
);
