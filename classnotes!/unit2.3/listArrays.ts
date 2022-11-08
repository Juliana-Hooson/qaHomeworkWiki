let firstList: Array<Number> = [12, 15]

let secondList: Array<string> = [
    "Elephant",
    "Lion",
    "Tiger",
    "Polar Bear",
    "Monkeys"
]

firstList.push(12345)
firstList.push(456778)
firstList.push(2476459363)

console.log("The first list is:",firstList )
console.log("The second list is", secondList)


console.log("should be 12345", firstList [2])
console.log("should be Elephant",secondList [0])
