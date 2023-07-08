const db = require('./db');

async function deleteAdminRow() {
    const [admin_id] = process.argv.slice(2);
    db.run(
        `DELETE FROM Admin WHERE admin_id=?`,
        [admin_id],
        function(error) {
            if (error) { return console.error(error.message);}
            console.log(`Row with ID ${admin_id} has been deleted`);
        }
    );
}

deleteAdminRow();
