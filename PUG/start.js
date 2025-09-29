const express=require('express')
const {join} = require("path");
let app=express()


const morgan = require("morgan");
const {createWriteStream} = require("fs");
 
const logFile = join(__dirname, "start.log");   // create the log file in the current project directory
 
/*--------------Morgan module ------------------*/
app.use(morgan(":method - :url - :date - :response-time ms"));  // morgan template
app.use(
  morgan(":method -:url - :date - :response-time ms", {
    stream: createWriteStream(logFile, { flags: "a" }),
  })
);
//---------------- end ------------------------//
 

app.use("/assets", express.static(join(__dirname, "public")));

app.set("view engine", "pug");


app.get('/welcome',(req,res)=>{
    res.render('welcome')
})
.post('/welcome',(req,res)=>{
    res.redirect('/register') 
})

app
.get('/register',(req,res)=>{
    res.render('register')
})
.post('/register',(req,res)=>{
    res.redirect('/welcome')
})


app.listen(3001, () => console.log("Website started"));



db.products.aggregate([
  {
    $match:{
      "stock":{$lte:10}
    }
  },
  
    {
      $count:1
    }
  
])