const fs = require('fs');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

const site_base = 'https://www.mcdonalds.com';
const burger_url = '/us/en-us/full-menu/burgers.html';
let $;
const mcFetch = url => fetch(site_base + url)
	.then(res => res.text());

function loadBurgerList() {
	mcFetch(burger_url)
		.then(html => {
			$ = cheerio.load(html);
			parseBurgerList();
		})
}

function strip(name) {
	return name.replace(/[®\*]/g, '');
}

function parseBurgerList() {
	let burgers = [];
	$('.iconic_count').each((i, el) => {
		let burger = {};
		burger.name = strip($(el).find('h4').text());
		burger.link = strip($(el).find('a').attr('href'));
		burgers.push(burger);
	});
	parseBurgersData(burgers);
}

async function parseBurgersData(burgers) {
	for (let [key, burger] of burgers.entries()) {
		burgers[key] = { ...burger, ...await parseBurger(burger.link) };
		delete burgers[key].link;
	}
	burgers = burgers.filter(b => b.ingredients.length);
	fs.writeFileSync(__dirname + '/data/burgers.json', JSON.stringify(burgers));
	console.log(burgers);
}

function parseBurger(link) {
	let burger = {};
	return mcFetch(link)
		.then(html => {
			$ = cheerio.load(html);
			burger.ingredients = [];
			$('.ingredient-text').each((i, el) => {
				burger.ingredients.push($(el).text().toLowerCase());
			});
			return burger;
		})
}
loadBurgerList();