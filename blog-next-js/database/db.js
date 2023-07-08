const sqlite3 = require("sqlite3").verbose();
const filepath = "./blogs.db"
const fs = require("fs");

function createDbConnection() {
    if (fs.existsSync(filepath)) {
        return new sqlite3.Database(filepath)
    } else {   
        const db = new sqlite3.Database(filepath, (error) => {
            if (error) 
                return console.log(error.message);
            createTable(db);    
        });
        console.log(" Connection with SQlite has been established ");
        return db;
    }
}

function createTable(db) {
    db.exec(`
        CREATE TABLE IF NOT EXISTS "Blog" (
            "blog_id"	INTEGER,
            "title"	TEXT,
            "content"	TEXT,
            "author_id"	TEXT,
            PRIMARY KEY("blog_id")
        );
        CREATE TABLE IF NOT EXISTS "Admin" (
            "admin_id"	INTEGER,
            "admin_name"	TEXT,
            "admin_password"	TEXT,
            PRIMARY KEY("admin_id")
        );
    `);
}

export default createDbConnection();