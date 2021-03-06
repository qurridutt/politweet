const express = require("express");
const app = express();
const request = require("request");
const cors = require("cors");
const bearer_token = require("./config.js");
const twitter_api = "https://api.twitter.com/1.1/users/lookup.json";

app.use(cors({origin: "*"}));

app.get("/fight", (req, res) => {

	require("./fight.json");

	res.send(body)

});


app.get("/fighter1", (req, res) => {
	const apiCall = {
		method: "GET",
		url: twitter_api,
		qs: {
				"screen_name": "annieloof",
				"exclude_replies": true,
				"count": 1
		},
		json: true,
		headers: {
				"Authorization": "Bearer " + bearer_token
		}
	};

	request(apiCall, (error, response, body) => {
		res.send(body);
	});
});

app.get("/fighter2", (req, res) => {
	const apiCall = {
		method: "GET",
		url: twitter_api,
		qs: {
				"screen_name": "swedishpm",
				"exclude_replies": true,
				"count": 1
		},
		json: true,
		headers: {
				"Authorization": "Bearer " + bearer_token
		}
	};

	request(apiCall, (error, response, body) => {
		res.send(body);
	});
});

app.get("/fighter3", (req, res) => {
	const apiCall = {
		method: "GET",
		url: twitter_api,
		qs: {
				"screen_name": "cbildt",
				"exclude_replies": true,
				"count": 1
		},
		json: true,
		headers: {
				"Authorization": "Bearer " + bearer_token
		}
	};

	request(apiCall, (error, response, body) => {
		res.send(body);
	});
});

app.get("/fighter4", (req, res) => {
	const apiCall = {
		method: "GET",
		url: twitter_api,
		qs: {
				"screen_name": "jsjostedt",
				"exclude_replies": true,
				"count": 1
		},
		json: true,
		headers: {
				"Authorization": "Bearer " + bearer_token
		}
	};

	request(apiCall, (error, response, body) => {
		res.send(body);
	});
});

app.get("/fighter5", (req, res) => {
	const apiCall = {
		method: "GET",
		url: twitter_api,
		qs: {
				"screen_name": "jimmieakesson",
				"exclude_replies": true,
				"count": 1
		},
		json: true,
		headers: {
				"Authorization": "Bearer " + bearer_token
		}
	};

	request(apiCall, (error, response, body) => {
		res.send(body);
	});
});

app.get("/fighter6", (req, res) => {
	const apiCall = {
		method: "GET",
		url: twitter_api,
		qs: {
				"screen_name": "bjorklundjan",
				"exclude_replies": true,
				"count": 1
		},
		json: true,
		headers: {
				"Authorization": "Bearer " + bearer_token
		}
	};

	request(apiCall, (error, response, body) => {
		res.send(body);
	});
});

app.get("/fighter7", (req, res) => {
	const apiCall = {
		method: "GET",
		url: twitter_api,
		qs: {
				"screen_name": "BuschEbba",
				"exclude_replies": true,
				"count": 1
		},
		json: true,
		headers: {
				"Authorization": "Bearer " + bearer_token
		}
	};

	request(apiCall, (error, response, body) => {
		res.send(body);
	});
});

app.get("/fighter8", (req, res) => {
	const apiCall = {
		method: "GET",
		url: twitter_api,
		qs: {
				"screen_name": "isabellalovin",
				"exclude_replies": true,
				"count": 1
		},
		json: true,
		headers: {
				"Authorization": "Bearer " + bearer_token
		}
	};

	request(apiCall, (error, response, body) => {
		res.send(body);
	});
});

app.listen(4000, () => console.log("Var hälsad kära utvecklare. Politweet lyssnar på port 4000!"));
