// create an http server
const express = require("express");
const port = process.env.PORT || 3000;
//  differnece between process.env and normal port is that process.env is used to deploy the app on a server and the normal port is used to run the app on the local machine
const app = express();
// similar to fs.readFile, but for http requests
// app.get("/", function(req, res){
//     res.send("Hello World!");
// });
// req has headers, body, and query parameters 
// res has headers, body, and status code

//  to use body use the command below
//  npm install body-parser
//  const bodyParser = require("body-parser");
// app.use(bodyParser.json());
//  then you can do req.body
//  body parser is used to parse the body of the request and convert it to a json object 

//  for not clsoing the server again and again and saving changes use nodemon
//  npm install -g nodemon
//  nodemon index.js to run the server  \
//  req.json is used to send json data to the server . json data means data in the form of key value pairs  like {name: "abc", age: 20}
app.post("/backend-api/conversations",function(req,res){
    const message = req.query.message;
    console.log(message);
    req.json({
        output : "2+2 = 4"
    })
}); 
app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
});

// create a todo app that lets users store data on a file


