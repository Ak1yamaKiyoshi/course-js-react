const db = require("./db");

function insertAdminRow(){
    const [admin_id, admin_name, admin_password] = process.argv.slice(2);
    db.run(
        `INSERT INTO Admin (admin_id, admin_name, admin_password) VALUES (?, ?, ?)`,
        [admin_id, admin_name, admin_password],
        function( error ) {
            if ( error ) { 
                console.error(error.message);
            }
            console.log(`Inserted a row with the ID: ${this.lastID}`);
        }
    );
};

insertAdminRow();