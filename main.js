const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let gameField =[]
/*
class Field {
  constructor(){
  }
  
}
*/

function generateField(rows,cols){
  //for loop to create the field
for(let i = 0; i < rows; i++){

  //CREATE NEW ROW 5 rows
  let row = [];

  for(let j = 0; j < cols; j++){
    //pushes value into ea row[j] 5 values in ea row
    row.push(fieldCharacter);
  }
  //push ea row into array 
 gameField.push(row)
}

const objRowSelc = Math.floor(Math.random()*(gameField.length))
const objcColSelc = Math.floor(Math.random()*(gameField.length))

//random set goal
const goalrowSelc = Math.floor(Math.random()*(gameField.length))
const goalcolSelc = Math.floor(Math.random()*(gameField.length))
//inset validation to remove 

console.log(goalrowSelc)
console.log(goalcolSelc)
  gameField[goalrowSelc][goalcolSelc] = hat

  //set start 
  gameField[0][0] = pathCharacter






let stringField = gameField.join('').replace(/,/g, '')
console.log(gameField)
}


generateField(5,5)