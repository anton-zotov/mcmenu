const fs = require('fs');
const util = require('util');

let burgers = [];
let last_changed_timestamp;
const bg_path = 'data/burgers.json';

function loadBurgers() {
	fs.stat(bg_path, (err, stats) => {
		let changed = new Date(util.inspect(stats.mtime)).getTime();
		if (changed !== last_changed_timestamp) {
			last_changed_timestamp = changed;
			console.log('readFile');
			fs.readFile(bg_path, (err, data) => {
				if (err) {
					return;
				}
				burgers = JSON.parse(data);
			})
		}
	})
}
loadBurgers();
setInterval(loadBurgers, 5000);

module.exports = () => burgers;