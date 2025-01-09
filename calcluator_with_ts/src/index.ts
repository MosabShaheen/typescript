import inquirer from "inquirer";
import chalk from "chalk";

let username = inquirer.prompt([{
    name: "name",
    type: "input",
    message: "Please enter your name:"
}])
// console.log(username.name)
// function welcome(username:string){
//     const wel = `      Welcome ${username}!, What do you want to do  `
//     return wel
// }

inquirer.prompt([{
    type: "number",
    name: "num1",
    message: "Please enter your first Number:",
    default: 0,
}, {
    type: "number",
    name: "num2",
    message: "Please enter your second Number:",
    default: 0,
},{
    type: "list",
    name: "opration",
    message: "Please select an operation:",
    choices: [
        "Add",
        "Divide",
        "Multiply",
        "Subtract",
    ]
}

]).then((value)=>{
    console.log(value)
})