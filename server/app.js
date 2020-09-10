require('dotenv').config(); //comment this out before deploy
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const routers = require('./routes/index.js');
const cors = require('cors');
const errorCheck = require('./middlewares/error-check.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routers);
app.use(errorCheck);

app.listen((PORT), () => {
  console.log(`app at http://localhost:${PORT}`);
})