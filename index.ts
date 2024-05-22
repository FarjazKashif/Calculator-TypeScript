import inquirer from "inquirer";

let ans = await inquirer.prompt([
    { message: "Enter a First Number: ", type: "number", name: "firstNumber" },
    { message: "Enter a Second Number: ", type: "number", name: "secondNumber" },
    {
        message: "Enter a Operator: ",
        type: "list",
        name: "operator",
        choices: [
            "Addition (+)", "Subtraction (-)", "Multiplication (*)", "Division (/)"
        ]
    },
])

// var answer = 0

if (ans.operator == "Addition (+)") {
    console.log(`"Your Answer of ${ans.firstNumber} + ${ans.secondNumber} is ${ans.firstNumber + ans.secondNumber}"`)
} else if (ans.operator == "Subtraction (-)") {
    console.log(`"Your Answer of ${ans.firstNumber} - ${ans.secondNumber} is ${ans.firstNumber - ans.secondNumber}"`)
} else if (ans.operator == "Multiplication (*)") {
    console.log(`"Your Answer of ${ans.firstNumber} * ${ans.secondNumber} is ${ans.firstNumber * ans.secondNumber}"`)
} else if (ans.operator == "Division (/)") {
    console.log(`"Your Answer of ${ans.firstNumber} / ${ans.secondNumber} is ${ans.firstNumber / ans.secondNumber}"`)
} else {
    console.log("Invalid!!!!!!!!!")
}