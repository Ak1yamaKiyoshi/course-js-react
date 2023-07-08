const db = require("./db");

function insertBlogRow(){
    const [blog_id, title, content, author_id] = process.argv.slice(2);
    
    db.run(
        `UPDATE Blog SET title=?, content=?, author_id=? WHERE blog_id = ?`,
        [title, content, author_id, blog_id],
        function(error) {
            if (error) { console.error(error.message); }
            console.log(`Updated a row with the ID: ${blog_id}`);
        }
    );
};

insertBlogRow();

/*
{
  blog_id: 1,
  title: 'coolTitle',
  content: 'SomeveryCoolContent',
  author_id: '0'
}
{
  blog_id: 2,
  title: 'coolTitle',
  content: 'SomeveryCoolContent',
  author_id: '0'
}
{
  blog_id: 3,
  title: 'coolTitle',
  content: 'SomeveryCoolContent',
  author_id: '0'
}

*/