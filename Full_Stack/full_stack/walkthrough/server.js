const express = require('express');
const cors = require('cors') // This is new
const app = express();
require('dotenv').config();
const port = process.env.PORT;
require('./server/config/mongoose.config');
app.use(cors()) // This is new
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/person.routes')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`) );

