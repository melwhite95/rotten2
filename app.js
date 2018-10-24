const express = require('express')
const app = express()
var exphbs = require('express-handlebars');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})

app.get('/', (req, res) => {
  res.render('home', { msg: 'Handlebars are Cool!' });
})






app.listen(3008, () => {
  console.log('We out here on 3008')
})
