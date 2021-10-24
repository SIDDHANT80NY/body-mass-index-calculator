var express = require('express');
const bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
app.post('/', function (req, res) {
    h = parseFloat(req.body.Height);
    w = parseFloat(req.body.Weight);
    bmi = w / (h * h);
    bmi = bmi.toFixed();
    req_name = req.body.Name;
    if (bmi < 19) {
        res.send("<h2>Name: " + req_name +"<br>BMI: " + bmi +"<br>Underweight!");
    } else if (19 <= bmi && bmi < 25) {
        res.send("<h2>Name: " + req_name +"<br>BMI: " + bmi +"<br>Normalweight!");
    } else if (25 <= bmi && bmi < 30) {
        res.send("<h2>Name: " + req_name +"<br>BMI: " + bmi +"<br>Overweight!");
    } else {
        res.send("<h2>Name: " + req_name +"<br>BMI: " + bmi +"<br>Obese!");
    }
});
app.listen( process.env.PORT || 5000 ,function () {
	console.log("Port active on http://localhost:5000/");
});