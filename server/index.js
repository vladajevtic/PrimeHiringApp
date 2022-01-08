require('dotenv').config();
require('./db/db');
const userRoutes= require('./routes/user');
const developersRoutes = require('./routes/developers')
const express = require('express');
const { PORT } = process.env;
const app = express();


app.use(express.json());
app.use(userRoutes);
app.use(developersRoutes);

app.listen(PORT,() =>{
    console.log(`server is listening on port ${PORT}`)
})