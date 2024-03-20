var express = require('express');
var router = express.Router();
var session = require('express-session')
const user = require('../controllers/userController')
router.get('/', function(req, res, next) {
  res.render('Login', { title: 'Express' });
});
router.get('/Register',function(req,res,next){
  res.render('Register')
});
router.post('/Register',user.insertData);
router.post('/Login',user.checkLogin)
router.get('/Login',function(req,res,next){
  if(req.session.email!=undefined)
  {
    req.session.destroy();
  }
  res.render('Login')
})
router.get('/Home',function(req,res,next){
  res.render("Home")
});
router.get('/About',function(req,res,next){
  res.render('About')
});
router.get('/userIndex',function(req,res,next){
  res.render('userIndex')
});
router.get('/Feedback',function(req,res,next){
  res.render('Feedback')
});
router.post('/Feedback',user.feedData)
router.get('/Logout',function(req,res,next){
  req.session.destroy()
  res.redirect('/Login')
  next()
})


module.exports = router;
