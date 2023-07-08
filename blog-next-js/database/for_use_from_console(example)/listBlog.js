const db = require("./db");


function selectAllBlogRows() {
    db.each(`SELECT * FROM BLOG`, 
    (error, row) => {
        if (error) {
            throw new Error(error.message);
        }
        console.log(row);
    });
}

selectAllBlogRows();