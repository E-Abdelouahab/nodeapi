const express = require("express");
const mongosse = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/api");

//set up express app

const app = express();

//Middleware
app.use(bodyParser.json());

//connect to mongosse

const url ="mongodb+srv://AdminDb:<admin>@cluster0.kzovw.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongosse.connect(url, { UseNewUrlParser : true });
mongosse.Promise = global.Promise;

//error handling middleware

//routes localhost:5000/users
app.use(routes);
//listing for requists 

app.listen(process.env.PORT || 5000, () =>{
    console.log('Now listening for requist on') ;
})
 
