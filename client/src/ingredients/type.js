const classifier = {
	"meat": ["beef", "bacon"],
	"dough": ["roll", "bun"],
	"groceries": ["tomato", "lettuce", "garlic", "lime", "onions", "pico de gallo", "pickle"],
	"cheese": ["cheese"],
	"sauce": ["sauce", "ketchup", "mustard", "guacamole"]
}

export default function getType(ingredient) {
	for (let [type, words] of Object.entries(classifier)) {
		for (let word of words) {
			if (ingredient.match(new RegExp(`\\b${word}\\b`))) {
				return type;
			}
		}
	}
}