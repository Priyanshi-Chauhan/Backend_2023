const express =  require('express');
const path =  require('path');
// const { runInNewContext } = require('vm');
const port= 8000;

const db = require('./config/mongoose');
const contact = require('./models/contact');

const app =  express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname ,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
//middleware1
// app.use(function(req , res ,next){
//     console.log('middlware1 called');
// next();
// })

// //middlware2 
// app.use(function(req,res,next){
//     console.log('middleware2 called');
//     next();

// })

var contactlist = [
{
    name :"arpan",
    phone:0000000000
},
{
    name:"tony stark", 
    phone : 1111111111
}, 
{
     name :"coding ninjas",
      phone:2222222222
}
]

app.get('/' , function(req, res){
    // console.log(__dirname);
    // res.send('<h1>cool its running now</h1>');
    contact.find({nam:"new"

}, function (err, contactss){
    if(err){
        console.log('error in fetching data');
   return ;
    }
return res.render('home', {title : "contact list" , contact_list : contactss});
})
})
app.get('/pract' , function(req, res){
    return res.render('practice' , {title: "lets play"});
})

app.post('/create-contact', function(req, res) {
//     contactlist.push({
//         name: req.body.names,          // names and phno are the names of the input field
//         phone : req.body.phno
//     })

// console.log(req.body);
// console.log(req.body.names);
// console.log(req.body.phno);
//  contactlist.push(req.body);
contact.create({
    name : req.body.names,
    phone: req.body.phno
}, function(err,newcontact){
    if(err){ 
    console.log('error in creating the contact')
    return;
} 
    console.log('************', newcontact);
    return res.redirect('back');
})


//    return res.redirect('/pract');
});

// app.get('/delete-contact/:pe' , function(req, res){
// // console.log(req.params);
// let mobile =  req.params.pe;
// // console.log(mobile);

// })
app.get('/delete-contact-query/' , function(req, res){
     console.log(req.query);
   
   
     //  let naam=  req.query.n;                          // n and phno are the names used in query
    //  let phaan = req.query.pho;

// let phoneindex = contactlist.findIndex(sampark => sampark.phone == phaan);
   
//console.log(naam, phaan);
// if(phoneindex != -1){
//      contactlist.splice(phoneindex, 1);
// }
let i = req.query.oid;
contact.findByIdAndDelete(i, function(err){
     if(err){console.log('there is an error');
     return;}
     return res.redirect('back');
})
//  return res.redirect('back');
})


app.listen(port, function(err){
    if(err){
         console.log('error', err);
          return;
    }
    console.log('yup my express server is running on port', port);
});