var createError = require('http-errors');
var axios = require('axios')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyparser = require('body-parser')
var session = require('express-session')
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var app = express();
app.use(bodyparser.urlencoded({extended:false}))
app.use(session({'secret':'Hackathon Project 2024'}))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',indexRouter);
app.use('/users',userRouter);


app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  res.status(err.status || 500);
});
console.log("Server Started at : http://localhost:3001")

// axios.post("http://13.48.136.54:8000/api/api-code/",{},{
//     headers:{
//       'Authorization': 'Bearer 2aa8526f-44f6-4eab-9294-a02005cc9398'
//     }
//   }).then((res)=>{
//     console.log(res)
//   })
module.exports = app;
