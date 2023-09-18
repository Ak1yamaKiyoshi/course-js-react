const db = require("./db");


function selectAllAdminRows() {
    db.each(`SELECT * FROM ADMIN`, 
    (error, row) => {
        if (error) {
            throw new Error(error.message);
        }
        console.log(row);
    });
}

selectAllAdminRows();