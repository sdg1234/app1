var express= require('express')
var app = express();
app.use(express.static('public'))
app.listen(8050,()=> console.log("hi am ok"));