var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
 
  var rand=Math.random();
   
  if(req.query.rand!=undefined){

   rand=req.query.rand;

  }
 
  res.render('computation', { title: 'computation', 
  key: `${rand} is ${Math.abs(rand)}`,
  val: `${rand} is ${Math.acos(rand)}`,
  sol: `${rand} is ${Math.sin(rand)}`,
  ans: `${rand} is ${Math.sinh(rand)}`


});
});

module.exports = router;

