const {Pool, Client} = require('pg');
const connectionString = 'postgres://@localhost/updates';

const pool = new Pool({
	connectionString: connectionString
	});

const client = new Client({
	connectionString:connectionString
});



const postUpdates = (title, description, update_date, comments, likes, project_id,backers_only,cb) =>{
    let query = `INSERT INTO updates (title,description,update_date,comments,likes,project_id,backers_only) VALUES ('${title}', '${description}', '${update_date}', '${comments}', '${likes}', '${project_id}', ${backers_only})`;
    pool.query(query, (err, res) => {
      if (err) console.log(err);
        console.log('update posted');
        cb(res);
      });
};

const updateDescription = (description, id, cb) => {
	let query = `UPDATE updates SET description = '${description}' WHERE id = ${id}`;
	pool.query(query, (err, res) => {
      if (err) console.log(err);
        console.log('description updated');
        cb(res);
	});
}

client.connect();

module.exports = {
	pool,
	client,
	postUpdates,
	updateDescription
}

