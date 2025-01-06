"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
inquirer_1.default.prompt([
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
]).then((value) => {
    console.log(value);
});
