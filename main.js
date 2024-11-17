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

function generateField(rows,cols, perct){
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

// NEEDS TO place randomly (row x cols times)/perct (limits the dificulty)

//const objRowSelc = Math.floor(Math.random()*(gameField.length))
//const objColSelc = Math.floor(Math.random()*(gameField.length))
//console.log(`obj R = ${objRowSelc} and obj C = ${objColSelc}`)

for(let i = 0; i < gameField.length; i++){
  gameField
  for(let j = 0; j < gameField[i].length; j++){
    //1-10 for dificulty 1 super hard 10 super easy 5 reccommended
    const coinFlip = Math.floor(Math.random()*(perct))
  if(coinFlip === 1){
    gameField[i][j] = hole;
  } else {
    continue;
  }
}
  
}

//random set goal
const goalrowSelc = Math.floor(Math.random()*(gameField.length))
const goalcolSelc = Math.floor(Math.random()*(gameField.length))
//inset validation to remove 

console.log(goalrowSelc)
console.log(goalcolSelc)
  gameField[goalrowSelc][goalcolSelc] = hat

  //set start 
  gameField[0][0] = pathCharacter





// set the field in string format and grid 
let stringField = gameField.join('' + '\n').replace(/,/g, '' )
console.log(gameField)
console.log(stringField)
}


generateField(5,5,5)