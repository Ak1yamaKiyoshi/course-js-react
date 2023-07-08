const db = require('./db');

//  admin_password
function updateNameById() {
    const [ admin_id, admin_name,] = process.argv.slice(2);
    db.run(
        `UPDATE ADMIN SET admin_name = ? WHERE id = ?`,
        [admin_name, admin_id], 
        function (error) {
            if (error) {
                throw new Error(error.message);
            }
            console.log(`Row ${admin_id} has been updated`);
        }
    );
}

updateNameById();