import getType from "./type";


const colors = {
	"meat": "danger",
	"dough": "secondary",
	"cheese": "warning",
	"groceries": "success",
	"sauce": "info"
}

export default function getColor(ingredient) {
	return colors[getType(ingredient)] || "";
}