var express= require('express')
var app = express();
app.use(express.static('public'))
var port = Number(process.env.PORT || 3001);
app.listen(port, () => console.log('app listening on port: '+port))
