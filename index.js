let mondayMenu = ["steak", "broccoli", "mashed potatoes"]


//We want to upper case the Monday monday menu
//forEach

let changedMondayMenu = mondayMenu.forEach((element, index)=>{
	mondayMenu[index] = element.toUpperCase()
})


console.log(mondayMenu)
console.log(changedMondayMenu)
console.log(mondayMenu)


//We only want Monday's menu to be upper case
//Map

let tuesdayMenu = mondayMenu.map((element, index)=>{
	if (mondayMenu[index] === "STEAK"){
		mondayMenu[index] = element.toLowerCase()
	}
})

console.log(mondayMenu)
console.log(tuesdayMenu)


//We only want animals whose name starts with t
//filter

let zooAnimals = ["bear", "elephant", "snake", "snake", "tiger", "tasmanian devil"]

let tAnimals = zooAnimals.filter((element, index)=>
	zooAnimals[index][0] === "t"
)

let allSnakes = zooAnimals.filter((element, index)=>
 zooAnimals[index] === "snake"
)


//Just want the first snake
//Find

let firstSnake = zooAnimals.find((element, index)=>
 zooAnimals[index] === "snake"
)


console.log(zooAnimals)
console.log(tAnimals)
console.log(allSnakes)
console.log(firstSnake)



//Arrow function syntax options:

let oneParam = param => param + param2

let multipleParams = (param,param2) => param + param2

let singleLineInBlock = param => param + param2

let multipleLinesInBlock = param => {
	let sum = param + param2
	return sum * 3
}
