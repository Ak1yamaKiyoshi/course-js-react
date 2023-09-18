const db = require("./db");

function insertBlogRow(){
    const [blog_id, title, content, author_id] = process.argv.slice(2);
    db.run(
        `INSERT INTO Blog (blog_id, title, content, author_id) VALUES (?, ?, ?, ?)`,
        [blog_id, title, content, author_id],
        function( error ) {
            if ( error ) { 
                console.error(error.message);
            }
            console.log(`Inserted a row with the ID: ${this.lastID}`);
        }
    );
};

insertBlogRow();