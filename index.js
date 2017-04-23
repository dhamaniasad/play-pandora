const PlayMusic = require("playmusic");
const Anesidora = require("anesidora");

let pandora = new Anesidora(process.env.PANDORA_ID, process.env.PANDORA_PASS);

let pm = new PlayMusic();

pm.init({email: process.env.GMAIL_ID, password: process.env.GMAIL_PASS}, (err) => {
	if (err) {
		console.error(err);
	} else {
		pm.getPlayLists((err, data) => {
			pandora.login((err) => {
				if (err) throw err;
				pandora.request("user.getStationList", (err, stationList) => {
					if (err) throw err;
					console.log(stationList);
				});
			});
		});
	}
});
