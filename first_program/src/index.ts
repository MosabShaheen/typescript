// let age = "Mosab";

// function greetings(name:string):string{
//     return `Hello ${name}`
// }
// console.log(greetings(age))

// let numbers: number[] = [1,2,3,4,]

// let newTask: {
//     id: number;
//     title: string;
//     completed: boolean;
// } = {
//     id: Date.now(),
//     title: "this is the first title",
//     completed: false
// }

// console.log(newTask.title)

// if(true){
//     let x = 30
//     const y = 20
//     console.log(x,y)
// }

import inquirer from "inquirer";

inquirer.prompt([
    {
        type: "input",
        message: "what is your name?",
        name:"name"
    }
]).then((ans)=>{
    console.log(ans.name)
})