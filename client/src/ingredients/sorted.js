import getType from "./type";

const order = ["dough", "meat", "cheese", "sauce", "groceries"];

export default function sorted(ingredients) {
	return ingredients.sort((a, b) =>
		order.indexOf(getType(a)) - order.indexOf(getType(b)));
}