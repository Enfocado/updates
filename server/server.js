var newrelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');

const Log = require('log');

const db = require('../postgres/postgres.js');

const log = new Log();

const app = express();
const port = process.env.PORT || 3004;

app.use(express.static('client/dist'));
app.use(bodyParser.json());

//create a redis client
let redisClient = redis.createClient();

redisClient.on('connect', () => {
  console.log('connected to redis');
})


app.get('/', (req,res) => {
  res.send('home page');
})
// get update item

app.get('/projects/:id/updates', (req,res) =>{
  var id = req.params.id;
  redisClient.get(id, (error, result) => {
    if(result){
      const resultJSON = JSON.parse(result);
      res.json({"updates" : resultJSON, "source": "Redis"});
    } else {
      db.client.query(`SELECT title,description,update_date,comments,likes,project_id,backers_only FROM updates WHERE project_id = ${req.params.id} `,  (err, update) => {
        
        redisClient.setex(id, 120, JSON.stringify(update.rows) );
        res.send({ "updates": update.rows, "source": "Postgres DB"});
      });
    }
  });

  
});

// added more routes
app.post('/projects/:id/updates/add', (req, res) => {
  db.postUpdates(req.body.title, req.body.description, req.body.update_date,req.body.comments,req.body.likes,req.params.id, req.body.backers_only, (result) => (res.send(result)));
});
// delete project
app.delete('/projects/:id/updates', (req, res) => {
  const query = `DELETE FROM updates WHERE project_id = ${req.params.id}`;
  db.client.query(query, (err, result) => {
    if (err) {
      throw err;
    }

    res.send('deleted project');
  });
});
// edit project
app.put('/projects/:id/updates/:updateid', (req, res) => {
   
   db.updateDescription(req.body.description, req.params.updateid, (result) => (res.send(result)));
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, log.info(`server running on port ${port}`));
}


module.exports = app;

