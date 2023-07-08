const db = require("./db");


function selectBlogRow() {
    const [blog_id] = process.argv.slice(2);
    db.each(`SELECT * FROM BLOG WHERE blog_id = ?`,
    [blog_id],
    function (error, row) {
        if (error) {
            throw new Error(error.message);
        }
        console.log(row);
    });
}

selectBlogRow();