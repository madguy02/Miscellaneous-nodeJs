var request = require("request");
var cheerio = require ("cheerio");

url = "http://www.imdb.com/title/tt1229340/";

request(url,function(error,response,html){
	
	if (!error)
	{
		var $ = cheerio.load(html);
		$('class.itemprop','name').each(function(){
			var url = this.attr('name');
			urls.push(url);


		});
		//console.log(urls);


	}


});