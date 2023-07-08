const db = require('./db');

async function deleteBlogRow() {
    const [blog_id] = process.argv.slice(2);
    db.run(
        `DELETE FROM Blog WHERE blog_id=?`,
        [blog_id],
        function(error) {
            if (error) { return console.error(error.message);}
            console.log(`Row with ID ${blog_id} has been deleted`);
        }
    );
}

deleteBlogRow();
