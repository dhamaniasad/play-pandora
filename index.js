// Inspiration: https://github.com/sagnew/CallStatusDashboard

const express = require("express");

const PlayMusic = require("playmusic");
const Anesidora = require("anesidora");

const nunjucks = require("nunjucks");

const bodyParser = require('body-parser');


let app = express();

app.use(express.static('static'));


app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


nunjucks.configure('views', {
	autoescape: true,
	express: app
});

app.get("/", (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.post('/playlogin', (req, res) => {
	let pm = new PlayMusic();
	console.log(req.body);
	let email = req.body.email;
	let pass = req.body.password;
	pm.init({email: email, password: pass}, (err) => {
		if (err) {
			console.log(err);
			res.status(401).end();
		} else {
			res.status(200).end();
		}
	});
});

// let pandora = new Anesidora(process.env.PANDORA_ID, process.env.PANDORA_PASS);

// let pm = new PlayMusic();

// pm.init({email: process.env.GMAIL_ID, password: process.env.GMAIL_PASS}, (err) => {
// 	if (err) {
// 		console.error(err);
// 	} else {
// 		pm.getPlayLists((err, data) => {
// 			pandora.login((err) => {
// 				if (err) throw err;
// 				pandora.request("user.getStationList", (err, stationList) => {
// 					if (err) throw err;
// 					console.log(stationList);
// 				});
// 			});
// 		});
// 	}
// });

app.listen(3000, () => {
	console.log("App listening on port 3000!");
});
