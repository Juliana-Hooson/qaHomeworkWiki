var todos: Array<string> = [
    "wash the car",
    "Get groceries",
    "go to the gym",
    "Eat dinner"
]

//for loops first a declaring variable then a s stament to check then a increment or decrement to the variable
//in this loop we will start at 0 with i stands for index this will loop as long as there are items in te array index
for(let i = 0;i < todos.length; i++) {
    console.log('Todo #${i + 1}: ${todos[i]}!')

}
todos.forEach((todo) => {
    console.log('You stil need to ${todo}!')
})