const express = require('express')
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;
require('./hbs/helpers')
app.use( express.static( __dirname + '/public'));

// Express HBS engine
hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
   
    res.render('home', {
        nombre: 'jose hernandez'
    });

});
 
app.get('/about', function (req, res) {
   
    res.render('about', {
        anio: new Date().getFullYear()
    });

});
app.listen(port);