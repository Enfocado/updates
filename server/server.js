const express = require('express');
const bodyParser = require('body-parser');

const Log = require('log');

const db = require('../postgres/postgres.js');

const log = new Log();

const app = express();
const port = process.env.PORT || 3004;

app.use(express.static('client/dist'));
app.use(bodyParser());

//get all updates
  
// app.get('/projects/:id/updates', (req, res) => {
//   db.pool.query(`SELECT backers,date_created,ending_date,goal,money_raised FROM projects WHERE id=${req.params.id}`, (error, results) => {
//     const project = {
//       dateCreated: results[0].date_created,
//       endingDate: results[0].ending_date,
//       backers: results[0].backers,
//       moneyRaised: results[0].money_raised,
//       goal: results[0].goal,
//     };
//     db.query(`SELECT backers_only,comments,description,likes,title,update_date FROM updates WHERE project_id=${req.params.id} ORDER BY update_date`, (updatesError, updatesResults) => {
//       const updates = [];
//       updatesResults.forEach((update) => {
//         const updateObj = {
//           title: update.title,
//           description: update.description,
//           updateDate: update.update_date,
//           comments: update.comments,
//           likes: update.likes,
//           backersOnly: update.backers_only,
//         };
//         updates.push(updateObj);
//       });
//       project.updates = updates;
//       res.send(project);
//     });
//   });
// });

// get update item
app.get('/projects/:id/updates', (req,res) =>{
  db.client.query(`SELECT title,description,update_date,comments,likes,project_id,backers_only FROM updates WHERE project_id = ${req.params.id} `,  (err, update) => {

     res.json(update)
  } )
  // const { params } = req;
  // db.getUpdates(params.id, (results) => (res.send(results)));
});

// added more routes
app.post('/projects/:id/updates/add', (req, res) => {
  db.postUpdates(req.body.title, req.body.description, req.body.update_date,req.body.comments,req.body.likes,req.body.project_id, req.body.backers_only, (result) => (res.send(result)));
  console.log(req.body.title);
});
// delete project
app.delete('/projects/:id/updates/:updateid', (req, res) => {
  const query = `DELETE FROM updates WHERE project_id = ${req.params.id}`;
  db.client.query(query, (err, result) => {
    if (err) {
      throw err;
    }

    res.send('deleted project');
  });
});
// // edit project
// app.put('/projects/:id/updates/:updateid', (req, res) => {
//   const query = `INSERT INTO updates (title,description,update_date,comments,likes,project_id,backers_only) VALUES (?,?,?,?,?,${req.params.id},?)`;
//    const {
//     title, description, update_date, comments, likes, backers_only,
//   } = req.body;
//    db.query(query, [title, description, update_date, comments, likes, backers_only], (err, result ) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.sendStatus(201);
//   });
// });

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, log.info(`server running on port ${port}`));
}


module.exports = app;

