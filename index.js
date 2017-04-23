const PlayMusic = require("playmusic");

let pm = new PlayMusic();

pm.init({email: process.env.GMAIL_ID, password: process.env.GMAIL_PASS}, (err) => {
	if (err) {
		console.error(err);
	} else {
		pm.getPlayLists((err, data) => {
			console.log(data.data.items);
		});
	}
});
