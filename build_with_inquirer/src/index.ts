import inquirer from "inquirer";

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Please enter your name"
    },
    {
        type: "password",
        name: "password",
        message: "Please enter your password",
        mask: "a"
    }
]).then((value)=>{
    console.log(value)
})