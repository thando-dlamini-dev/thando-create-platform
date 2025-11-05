import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
import {ServiceData} from "./models/service.model";

dotenv.config();

const access = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}

const pool = mysql.createPool(access);

export const initializeDatabase = async () => {
    try {
        //Logging access info for debugging
        console.log("Initializing Database...");

        const connection = await pool.getConnection();
        //Create database if it doesn't exist
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);

        await connection.query(`USE ${process.env.DB_NAME}`);

        //Create user table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS users (
                id VARCHAR(50) PRIMARY KEY NOT NULL,
                username VARCHAR(50) NOT NULL,
                email VARCHAR(50) NOT NULL,
                display_name VARCHAR(50),
                google_access_token TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )`
        )

        //create user service table
        //Users will customize these services and add them to cart
        await connection.query(`
            CREATE TABLE IF NOT EXISTS user_services (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id VARCHAR(50) NOT NULL,
                service_type ENUM ('fullstack', 'frontend only', 'ecommerce') NOT NULL,
                selected_features JSON NOT NULL,
                estimated_price DECIMAL(10, 2) NOT NULL,
                status ENUM('draft', 'submitted', 'reviewed', 'accepted', 'in_progress', 'completed') DEFAULT 'draft',
                customer_notes TEXT,
                admin_notes TEXT,
                discount_code VARCHAR(100),
                final_price DECIMAL(10,2),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )`
        )

        //create database service table
        //Users will select from these services
        await connection.query(`
            CREATE TABLE IF NOT EXISTS database_services (
                id INT AUTO_INCREMENT PRIMARY KEY,
                service_name VARCHAR(50) NOT NULL,
                description TEXT NOT NULL,
                img_url VARCHAR(50),
                price DECIMAL(10, 2) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )`
        )

        //create discount codes table
        await connection.query(
            `
            CREATE TABLE IF NOT EXISTS discount_codes (
                code VARCHAR(20) PRIMARY KEY,
                discount_type ENUM('percentage', 'fixed_amount') NOT NULL,
                discount_value DECIMAL(10,2) NOT NULL,
                max_uses INT DEFAULT NULL,
                used_count INT DEFAULT 0,
                expires_at TIMESTAMP NULL,
                is_active BOOLEAN DEFAULT true,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`
        )

        console.log(`Database started at: ${Date()}.`);
    } catch (err) {
        console.error("Error initializing database: ", err);
    }
}

export default pool;

export const query = async (sql: string, params: Array<string | number>) => {

    return await pool.execute(sql, params);

}