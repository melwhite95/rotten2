const express = require('express')
const app = express()
var exphbs = require('express-handlebars');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// OUR MOCK ARRAY OF PROJECTS
let reviews = [
  { title: "Great Review", movieTitle: "Batman II" },
  { title: "Awesome Movie", movieTitle: "Titanic" }
]



// INDEX
app.get('/', (req, res) => {
  res.render('reviews-index', { reviews: reviews });
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
