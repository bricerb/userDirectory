const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const data = require('./public/data');

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('directory', data);
})

app.get('/:id', function(req, res) {
  var i = req.params.id -1;
  res.render('user', data.users[i]);
})

app.listen(3000, function() {
  console.log('Starting user Directory');
})





















/* users: [
 {
"id":1,
"username":"hjuza0",
"name":"Hamlen Juza",
"avatar":"https://robohash.org/blanditiisexercitationemquaerat.png?size=150x150&set=set1",
"email":"hjuza0@blogger.com",
"university":"Pomor State University",
"job":"Engineer IV",
"company":"Stark, Feil and Bode",
"skills":["DMVPN","HDX","Rhino 3D"],
"phone":"7-(397)813-7803",
"address":{"street_num":"78226",
"street_name":"Ryan",
"city":"Kamennogorsk",
"state_or_province":null,
"postal_code":"188950",
"country":"Russia"
}}












*/
