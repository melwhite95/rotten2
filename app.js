const express = require('express')
const app = express()
var exphbs = require('express-handlebars');
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/rotten-potatoes');
const Review = mongoose.model('Review', {
  title: String,
  movieTitle: String
});
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// OUR MOCK ARRAY OF PROJECTS
//let reviews = [
//  { title: "Great Review", movieTitle: "Batman II" },
//  { title: "Awesome Movie", movieTitle: "Titanic" }
//]



// INDEX
app.get('/', (req, res) => {
  Review.find()
    .then(reviews => {
      res.render('reviews-index', { reviews: reviews });
    })
    .catch(err => {
      console.log(err);
    })
})


//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})

//app.get('/', (req, res) => {
//  res.render('home', { msg: 'Handlebars are Cool!' });
//})






app.listen(3008, () => {
  console.log('We out here on 3008')
})
