//spread operator and rest operator la gi
const phones = ["samsung", "xiaomi", "hawoai", "iphone"];
const macbooks = ['macbook12', 'macbook13', 'macbook14', 'macbook15'];

//1 concat  array
const phoneMacBooks = phones.concat(macbooks);

const phoneMacbooksSpread = [...phones, 'iphone 7', 'iphone 8', ...macbooks , 'macbook16', 'macbook17'];

// 2 spread a string

// 3 copy array 

const oldPhones = [...phones]

oldPhones[0] = 'iphone 7phus'


// 4. trong function

const values = [20,10,30,15,25,5]

function sum(){
  var total = 0
  for ( const value of arguments  ){
    total += value
  }
  return total
}


console.log(sum(...values))


// -- ...rest

// 1. parameter of function 
// 2. destructuring

// ...spread -> tach array
// ...rest -> gom lai thanh array

function calculateGPA(math, literature,...rest){

  return ( ( math*2 + literature*2 + sum(...rest) ) / ( rest.length + 4 ) )
}



console.log(calculateGPA(8,6,5,4,3))


const Player = [
    "messi",
    "ronaldo",
    "falcao",
    'alaba',
    'benzemar'
];

const [coach, captain, ...players] = Player;
console.log(coach);
console.log(captain);
console.log(players);