const db = require('./db');


function updatePasswordById() {
    const [ admin_id, admin_password,] = process.argv.slice(2);
    db.run(
        `UPDATE ADMIN SET admin_password = ? WHERE admin_id = ?`,
        [admin_password, admin_id], 
        function (error) {
            if (error) {
                throw new Error(error.message);
            }
            console.log(`Row ${admin_id} has been updated`);
        }
    );
}

updatePasswordById();