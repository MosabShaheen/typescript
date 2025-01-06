"use strict";
// let age = "Mosab";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const inquirer_1 = __importDefault(require("inquirer"));
inquirer_1.default.prompt([
    {
        type: "input",
        message: "what is your name?",
        name: "name"
    }
]).then((ans) => {
    console.log(ans.name);
});
