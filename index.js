const prompt = require('readline-sync')

let playerAnswer = prompt.question('You have found yourself in a room with no obvious exits.\nUse the controls to navigate out of here.\nHit 1 to play ESCAPEROOM ');

const playAgain = (play) =>{
  console.log("lets play again!")
  let startOver = prompt.question("Hit 2 to start");
  if (startOver === "2"){
    userChoice2()
  }
}
const userChoice =(answer)=> {
  if (playerAnswer === "1"){
    userChoice2()
  }

}
const userChoice2= ()=>{
  console.log("Awesome!\nyou'll do great! now look for the coding book and pull on it, hit 2 when you do");
  let playerAnswer1 = prompt.question("Quick! hit the number 2")
  if (playerAnswer1 === "2"){
    userChoice3()
  } 
}
const userChoice3= () => {
  console.log ("Thats great!\n the bookcase opened and there is a secret door, but no key. Open the book to page 11 and find the Wyncode. Hit 3 whe your done");
  let playerAnswer2 = prompt.question("Quick! hit the number 3")
  if (playerAnswer2 === "3"){
    userChoice4()
  } 
}
const userChoice4= () => {
  console.log("You're on fire!!\n Now go to the keypad and input the wyncode! Hit 4 when you do.");
  let playerAnswer3 = prompt.question("Quick! hit the number 4")
  if (playerAnswer3 === "4"){
    userChoice5()
  } 
}
const userChoice5= () => {
  console.log("Your Wyncode opened a drawer at the coders desk, there is a box that says 'Never Stop Learning' open it to find a key. Hit 5 when you do");
  let playerAnswer4 = prompt.question("Quick! hit the number 5")
  if (playerAnswer4 === "5"){
    userChoice6()
  } 
}
const userChoice6= () => {
  console.log("Use these keys to open the secret door behind the book case and escape!")
  let playerAnswer5 = prompt.question("You made it out!! hit y to play again- ")
  if (playerAnswer5 === "y"){
    userChoice()
    
  }
  playAgain()
}
userChoice()