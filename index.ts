import inquirer from "inquirer";

type ansType ={
    userGuess: number
}
const systemGeneratedNo = Math.floor(Math.random() * 10);

const answer : ansType = await inquirer.prompt([
    {
        type : "number",
        name : "userGuess",
        message : "Write your guess between 1 to 10:"
    }
])

const {userGuess} = answer;

console.log(userGuess,":userGuess", systemGeneratedNo, ":System")

if(userGuess === systemGeneratedNo) {
    console.log("Congratulaions your answer is correct. \n You win!")
} else {
    console.log("Your answer is incorrect \n Better luck next time!")
}