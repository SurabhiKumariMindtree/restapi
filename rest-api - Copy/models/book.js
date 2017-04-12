var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// //Book Schema
var BookModel = new Schema({
    title: String,
    author: String,
    publisher: String,
    category: String,
    //count: Number
}, { collection: "BooksData2" });

// var BooksDat = mongoose.model("BooksData", booksSchema);
// var bookObj = BooksDat({
//     title: "Lincoln in the Bardo: A Novel",
//     author: "George Saunders",
//     publisher: "penguine",
//     category: "fiction",
//     count: 2,
// });
// var bookObj1 = BooksDat({
//     title: "Crush (Yale Series of Younger Poets)",
//     author: "Richard Siken",
//     publisher: "rupa",
//     category: "poetry",
//     count: 3,
// });
// var bookObj2 = BooksDat({
//     title: "Stories of Anton Chekhov",
//     author: "Anton Chekhov",
//     publisher: "chekhov",
//     category: "Self Help",
//     count: 4,
// });
// var bookObj3 = BooksDat({
//     title: "A Death in the Family (Penguin Classics) ",
//     author: "James Agee",
//     publisher: "american publisher",
//     category: " literature",
//     count: 5,
// });
// var bookObj4 = BooksDat({
//     title: "Seize the Day  ",
//     author: "Saul Bellow",
//     publisher: "audio edition",
//     category: " non-fiction",
//     count: 6,
// });
// var bookObj5 = BooksDat({
//     title: "Quarrel and Quandery ",
//     author: "Saul Bellow",
//     publisher: "audio edition",
//     category: "romantic",
//     count: 7,
// });



// bookObj.save(function(err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Book created")
//     }
// });
// bookObj1.save(function(err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Book created")
//     }
// });
// bookObj2.save(function(err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Book created")
//     }
// });
// bookObj3.save(function(err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Book created")
//     }
// });
// bookObj4.save(function(err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Book created")
//     }
// });
// bookObj5.save(function(err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("Book created")
//     }
// });

// app.get('/', function(req, res) {

//     res.send("hello lims team"); //send the response

// });
// app.get('/api')
// app.listen(3000, function() {
//     console.log('running on ur port');
// });

// var Booke 
module.exports = mongoose.model('Book', BookModel);

// module.exports.getBookes() = function(callback, limit) {
//     Booke.find(callback).limit(limit);

// }