    
const Interface_db = require('./queries')
const db = require('./db');

let inteface = new Interface_db(db);
console.log( inteface.selectAllBlogRows)