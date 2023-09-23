const mongoose = require("mongoose");
const contactschema= mongoose.Schema({
    name: {
        type :String,
         required : true
    }, 
    phone  : {
        type: String,
        required :true

    }
 });
  const contact = mongoose.model('Contact', contactschema);
  module.exports =  contact;
