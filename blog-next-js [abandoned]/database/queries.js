const db = require('./db');


class Interface_db {
    constructor (db) {
        this.db = db;
    }


    selectAdminWithName(admin_name) {
        let admin_output;
        this.db.run(
            `SELECT * From Admin where admin_name = ?`,
            [admin_name],
            function(error, admin) {
                if (error) { throw new Error(error.message); }
                admin_output= admin;
            }
        )
        return admin;
    }


    deleteAdminRow(admin_id) {
       this. db.run(
            `DELETE FROM Admin WHERE admin_id=?`,
            [admin_id],
            function(error) {
                if (error) { throw new Error(error.message); }
            }
        );
    }


    deleteBlogRow(blog_id) {
       this. db.run(
            `DELETE FROM Blog WHERE blog_id=?`,
            [blog_id],
            function(error) {
                if (error) { throw new Error(error.message); }
            }
        );
    }


    insertAdminRow(admin_id, admin_name, admin_password){
       this. db.run(
            `INSERT INTO Admin (admin_id, admin_name, admin_password) VALUES (?, ?, ?)`,
            [admin_id, admin_name, admin_password],
            function( error ) {
                if (error) { throw new Error(error.message); }
            }
        );
    };


    insertBlogRow(blog_id, title, content, author_id){
       this. db.run(
            `INSERT INTO Blog (blog_id, title, content, author_id) VALUES (?, ?, ?, ?)`,
            [blog_id, title, content, author_id],
            function( error ) {
                if (error) { throw new Error(error.message); }
            }
        );
    };


    selectAllAdminRows() {
        let array = [];
       this. db.each(`SELECT * FROM ADMIN`, 
        (error, row) => {
            if (error) { throw new Error(error.message); }
            array.push(row);
        });
        return row;
    }


    selectAllBlogRows() {
        let array = [];
       this. db.each(`SELECT * FROM BLOG`, 
        (error, row) => {
            if (error) { throw new Error(error.message); }
            array.push(row);
        });
        return row;
    }


    selectBlogRow(blog_id) {
        let output_row;
       this. db.each(`SELECT * FROM BLOG WHERE blog_id = ?`,
        [blog_id],
        function (error, row) {
            if (error) { throw new Error(error.message); }
            output_row = row;
        });
        return output_row;
    }


    updateNameById(admin_id, admin_name) {
       this. db.run(
            `UPDATE ADMIN SET admin_name = ? WHERE id = ?`,
            [admin_name, admin_id], 
            function (error) {
                if (error) { throw new Error(error.message); }
            }
        );
    }


    updatePasswordById( admin_id, admin_password) {
       this. db.run(
            `UPDATE ADMIN SET admin_password = ? WHERE admin_id = ?`,
            [admin_password, admin_id], 
            function (error) {
                if (error) { throw new Error(error.message); }
            }
        );
    }


    insertBlogRow(blog_id, title, content, author_id){
       this. db.run(
            `UPDATE Blog SET title=?, content=?, author_id=? WHERE blog_id = ?`,
            [title, content, author_id, blog_id],
            function(error) {
                if (error) { throw new Error(error.message); }
            }
        );
    };
} 


exports.Interface_db =Interface_db