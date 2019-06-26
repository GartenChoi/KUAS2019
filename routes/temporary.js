var express = require('express');
var router = express.Router();
const ftp=require('ftp');

var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://root:!majorofwkqtybj0816@52.231.158.65/admin', {useNewUrlParser: true, promiseLibrary: global.Promise});
var majorSchema = mongoose.Schema({
  name: {type: String, require: true},
  univname: {type: String}
});
const Major = mongoose.model('major', majorSchema);
router.get('/wordclouds', async function(req, res, next) {
  let ftpClient=new ftp();
  ftpClient.connect({
    host: 'jedo0328.cafe24.com',
    user: 'jedo0328',
    password:'jeidoubleu0328'
  });
  const majors = await Major.find({'wordclouds.0': {'$exists': true}},{'name':1,'univname':1});
  ftpClient.on('ready',function(){
    ftpClient.list('/MajorMap/chapter2.2/wordcloud',async function(err,list){
        return res.render('temporary/wordclouds', {ftplist:list,majors:majors});
    })
  });
});
module.exports = router;