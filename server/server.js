const express = require('express');

const app = express();
const port = process.env.PORT || 3004;

app.use(express.static('client/dist'));

app.listen(port, console.log(`server running on port ${port}`));