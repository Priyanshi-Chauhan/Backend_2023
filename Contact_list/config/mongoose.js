// require the library
const mongoose = require("mongoose");

// connect to the database
mongoose.connect('mongodb://localhost/contact_list_database');

// acquire the connection (to check if it is successful)
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'connection error'));

// up and running then print the message
db.once('open' , function() {
    console.log("successfully connected to the database");
});