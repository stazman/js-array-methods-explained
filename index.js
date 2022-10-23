let mondayMenu = ["steak", "broccoli", "mashed potatoes"]

let changedMondayMenu = mondayMenu.forEach(element, function{
	element.toUpperCase()
})


console.log(mondayMenu)
console.log(changedMondayMenu)


let tuesdayMenu = mondayMenu.map(element, function(){
	element.toUpperCase()
})

console.log(mondayMenu)
console.log(tuesdayMenu)


let zooAnimals = ["bear", "elephant", "snake", "snake", "tiger", "tasmanian devil"]

let tAnimals = zooAnimals.filter(element, function(){
	element[0] === "t"
})

let allSnakes = zooAnimals.filter(element, function(){
	element === "snake"
})

let firstSnake = zooAnimals.find(element, function(){
	element === "snake"
})


console.log(zooAnimals)
console.log(tAnimals)
console.log(allSnakes)
