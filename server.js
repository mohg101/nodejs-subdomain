require('dotenv').config()
const express = require('express');

const port = process.env.PORT || 5000;

const userRoutes = require("./routes/userRoutes");

const mongoose = require('mongoose');
const mongoDB = process.env.MONGO_URL;
mongoose.connect(mongoDB, {ssl: true, tlsInsecure:true ,useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => {
    const app = express();

    app.use(express.urlencoded({ extended: true}));

    app.get('/', (req, res)=> {
        return res.status(200).send({ success: true, message: "Welcome to App"});
    })
    app.use('/user', userRoutes);
    
    app.use('*', function (req, res) {
        res.status(404).send({ success: false, message: "Page Not Found", error: { name: "Error", message: "Invalid route" } });
    });
    
    app.listen(port, () => {
        console.log(`App listening at port ${port}`);
    })
  })
  .catch(err => console.log(err));