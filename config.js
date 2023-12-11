const { Sequelize } = require('sequelize');
const dotenv = require("dotenv");

dotenv.config()

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const db = new Sequelize(`mysql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, { logging: false });

const configInit = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
        await db.query(`
        CREATE TABLE IF NOT EXISTS genre (
            genreID INT PRIMARY KEY AUTO_INCREMENT,
            genre_name VARCHAR(255) NOT NULL
        );
        `)
        console.log("genre table created/verified");

        await db.query(`
        CREATE TABLE IF NOT EXISTS author (
            authorID INT PRIMARY KEY AUTO_INCREMENT,
            author_name VARCHAR(255) NOT NULL
        );
        `)
        console.log("author table created/verified");

        await db.query(`
        CREATE TABLE IF NOT EXISTS books (
            isbn VARCHAR(13) PRIMARY KEY,
            book_title VARCHAR(255) NOT NULL,
            rating DECIMAL(3, 2),
            genreID INT,
            authorID INT,
            publish_year INT,
            Qty INT DEFAULT 0,
            price DECIMAL(10, 2),
            CONSTRAINT fk_genre
                FOREIGN KEY (genreID)
                REFERENCES genre (genreID),
            CONSTRAINT fk_author
                FOREIGN KEY (authorID)
                REFERENCES author (authorID)
        );
        `)
        console.log("books table created/verified");
        
        await db.query(`
        CREATE TABLE IF NOT EXISTS subscription (
            subscriptionID INT PRIMARY KEY AUTO_INCREMENT,
            subscription_name VARCHAR(255) NOT NULL,
            validity INT,
            subscription_price DECIMAL(10, 2) NOT NULL);
        `)
        console.log("subscription table created/verified");
        
        await db.query(`
        CREATE TABLE IF NOT EXISTS users (
            userID INT PRIMARY KEY AUTO_INCREMENT,
            username VARCHAR(255) UNIQUE NOT NULL,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255),
            money_spent DECIMAL(10,2) DEFAULT 0.00
        );
        `)

        console.log("users table created/verified");
        
        await db.query(`
        CREATE TABLE IF NOT EXISTS borrowed_books (
            userID INT,
            isbn VARCHAR(13),
            borrow_date DATE,
            return_date DATE,
            CONSTRAINT pk_borrowed_books PRIMARY KEY (userID, isbn),
            CONSTRAINT fk_borrowed_books_users
                FOREIGN KEY (userID)
                REFERENCES users (userID),
            CONSTRAINT fk_borrowed_books_books
                FOREIGN KEY (isbn)
                REFERENCES books (isbn)
        );
        `)
        
        console.log("borrowed_books table created/verified");
        
        await db.query(`
        CREATE TABLE IF NOT EXISTS wishlist (
            wishlistID INT PRIMARY KEY AUTO_INCREMENT,
            userID INT,
            isbn VARCHAR(13),
            added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (userID) REFERENCES users(userID),
            FOREIGN KEY (isbn) REFERENCES books(isbn)
        );
        `)
        
        console.log("wishlist table created/verified");

        await db.query(`
        CREATE TABLE IF NOT EXISTS books_bought (
            userID INT,
            isbn VARCHAR(13),
            book_title VARCHAR(255),
            price DECIMAL(10, 2),
            purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT pk_books_bought PRIMARY KEY (userID, isbn, purchase_date),
            CONSTRAINT fk_books_bought_users
                FOREIGN KEY (userID)
                REFERENCES users (userID),
            CONSTRAINT fk_books_bought_books
                FOREIGN KEY (isbn)
                REFERENCES books (isbn)
        );
        `)
        
        console.log("books_bought table created/verified");

        await db.query(`
        CREATE TABLE IF NOT EXISTS subscriptions_bought (
            subscriptionID INT,
            userID INT,
            bought_date DATE,
            PRIMARY KEY (subscriptionID, userID),
            CONSTRAINT fk_subscriptions_bought_subscription
                FOREIGN KEY (subscriptionID)
                REFERENCES subscription (subscriptionID),
            CONSTRAINT fk_subscriptions_bought_user
                FOREIGN KEY (userID)
                REFERENCES users (userID)
        );
        `)
        
        console.log("subscriptions_bought table created/verified");

        await db.query(`
        CREATE TABLE IF NOT EXISTS admin (
            adminID INT PRIMARY KEY AUTO_INCREMENT,
            username VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL -- Hashed and salted password for security
        );
        `)

        console.log("admin table created/verified");


    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { configInit, db }