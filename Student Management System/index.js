//To RUN : - nodemon index.js

// Importing express
const express = require("express");
const app=express();
const path = require('path');

// Port on which app will be live
const port=3001;

// Configuring Mongodb database.
const db=require("./configure/mongoose");

//Setting view engine as ejs.
app.set('view engine','ejs');

// Using urlencoded parser as a middleware.
app.use(express.urlencoded());

// Initialising bootstrap
app.use('/css', express.static('node_modules/bootstrap/dist/css'))
app.use('/js', express.static('node_modules/bootstrap/dist/js'))
app.use('/js', express.static('node_modules/jquery/dist'))

var layouts = require('express-ejs-layouts');
app.use(layouts);
app.set('layout', 'layouts/layout');

//teacher and student routes
const teachRoutes = require("./routes/teacherRoutes")
const studRoutes = require("./routes/studentRoutes")
app.use("/teacher",teachRoutes);
app.use("/student",studRoutes);

// Homepage Route
app.get("/", (req, res) => {
    res.render("homepage");
});

//App is available at port(3001)
app.listen(port);