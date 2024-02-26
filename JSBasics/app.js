"use strict"

//TASK 1
console.log("TASK 1")
let someBananasString = "I can eat bananas all day"
console.log("Original string:" + someBananasString)
someBananasString = someBananasString.toUpperCase()
console.log("Uppercase string:" + someBananasString)
//alert(someBananasString)

//TASK 2
console.log()
console.log("TASK 2")
let newArray = ["Saab", "Volvo", "BMW"]
console.log("Original array: " + newArray)
console.log("Get third item: " + newArray[2])
newArray[0] = "baaS";
console.log("Array modification: " + newArray)
newArray.pop(2)
console.log("Remove last item: " + newArray)
newArray.push("Audi")
console.log("Add new item: " + newArray)
newArray.splice(1, 0, "Volvo", "BMW")
console.log("Splice array: " + newArray)

setTimeout(function () {
    process.exit();
}, 10000);
//debugger;
