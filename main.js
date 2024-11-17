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

  //CREATE NEW ROW 
  let row = [];

  for(let j = 0; j < cols; j++){
    //pushes value into ea row[j]
    row.push(fieldCharacter);
  }
  //push ea row into array 
 gameField.push(row)
}

//array to string
let stringField = gameField.join('').join
console.log(stringField)
}

console.log(generateField(5,5))
console.log(gameField[0][0])