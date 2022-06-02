const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require("mongoose")
require("dotenv").config();

//settings
const port = process.env.PORT || 9000;

app.set('json spaces', 2)

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use('/api', require('./routes/index'))

// mongodb connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.log(error))

//starting server
app.listen(port, () => {
    console.log(`server on port ${app.get('port')}`)
})