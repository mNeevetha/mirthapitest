const express = require('express');
const router = express.Router();
//const fetch=require('isomorphic-fetch');
//var fs = require('fs');
var pdf = require('html-pdf');
var contentbody;
// Fetch List of APS query records for a single user
router.get('/', (req, res, next) => {
 
filePath ="D://APSReport"+new Date().getTime()+".pdf";

var html = req.body.htmlPage;
  var options = { format: 'Letter',"border": {
    "top": "0mm",            // default is 0, units: mm, cm, in, px 
    "right": "0mm",
    "bottom": "0mm",
    "left": "5mm"
  }, };
  //const decodedHtmlPage = urlencode.decode(html);

  
    pdf
      .create(html, options)
      .toFile(filePath, function(err, res) {
        if (err) return console.log(err);
        console.log(res);
      });
    res.json({ message: 'Print Sucess' });
  

});

module.exports = router;