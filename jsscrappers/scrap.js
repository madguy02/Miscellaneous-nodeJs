var request = require("request");
 var cheerio = require("cheerio");

request('http://www.reddit.com',function(err,response,body){
	
	if (!err && response.statusCode==200){

		var $=cheerio.load(body);
		$ ('a.title','title may-blank').each(function(){

			var url = this.attr('href');
				urls.push(url);

		});
		console.log(urls);



	}


});