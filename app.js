var request = require('request');
const express = require("express")
const app = express()


var options = {
	url: 'https://app.zipcodebase.com/api/v1/search?apikey=b1ccc3e0-1317-11ec-9292-cf3deede0039&codes=226011'
};

app.get("/", (req, res) => {
	function callback(error, response, body) {
		if (!error && response.statusCode == 200) {
			res.send(response.body)
		}
	}

	request(options, callback);

})



app.listen(3000, () => {
	console.log("server started")
})