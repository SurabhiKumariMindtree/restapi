var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

// connect to Mongoose
mongoose.connect("webtechdevops.centralindia.cloudapp.azure.com:51003/surabhiapp");
//var db = mongoose.connection;
//this code will let you send response across domains
app.use(function(req, res, next) {   
    res.header("Access-Control-Allow-Origin", "*");    //setting the headers
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");   
    next();
});

app.listen(3000, function() {
    console.log('running on ur port');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var Book = require('./models/book');

app.get('/', function(req, res) {
    res.send("hello lims team"); //send the response

});

app.post('/insert-data', function(req, res) {
    console.log("Insert Data");
    console.log("In API.....", req.body);

    var myObj = {
        title: req.body.title || null,
        author: req.body.author || null,
        publisher: req.body.publisher || null,
        category: req.body.category || null,
    };

    var data = new Book(myObj);
    data.save();
    console.log("After save.....", myObj);

});

app.get('/getData', function(req, res) {
    Book.find()

    .then(function(doc) {
        res.send(doc);
        //cosole.log("Doc id", doc._id);
    });
});

app.post('/updateData/:id', function(req, res) {
    var id = req.params.id;
    //console.log(req.body.title);
    console.log("Updated ID is .....", id);

    Book.findById(id, function(err, doc) {
        if (err) {
            console.log('error , no entry found');
        }
        doc.title = req.body.title,
            doc.author = req.body.author,
            doc.publisher = req.body.publisher,
            doc.category = req.body.category
        doc.save();
    })
});

app.post('/deleteData/:id', function(req, res) {
    var id = req.params.id;
    console.log("Deleted ID is .....", id);

    Book.findByIdAndRemove(id).exec();

});