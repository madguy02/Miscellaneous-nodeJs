var express = require("express"),
app = express();

app.get('/',function(req,res){
	
	res.send( __dirname +'/home/manish/Desktop/project/clients/views/index.html');	

});

app.listen(3000,function(){
	console.log("i am listening.....")


})