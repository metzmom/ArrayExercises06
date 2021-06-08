//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//a) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.


let element1 = ['hydrogen', 'H', 1.008]
//console.log(element1);

let element2 = ['helium', 'He', 4.003]
//console.log(element2);

let element26 = ['iron', 'Fe', 55.85]
//console.log(element26);



//b) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
table =[];

//[element1,element2,element26];

table.push(element1,element2,element26);//
console.log("table:");
console.log(table);
console.log();

console.log("table[1]:");
console.log(table[1]);
console.log();

console.log("table[1][1]:");
console.log(table[1][1]);
console.log();

//c) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

console.log("table[0],table[0][0]:");
console.log(table[0],table[0][0]);
console.log();

//d) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log("mass of element1, the name for element 2 and the symbol for element26:");
console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[1][1]);
console.log();



//e) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.


car1 = ['Ford','pinto', 1980]
car2 = ['Chevy', 'corvette', 2001]
car3 =['Mercedes', '525', 2009]
cars = [];
cars.push(car1,car2,car3);
console.log("cars:");
console.log(cars);
console.log();

truck1 = ['Toyota','tundra', 1980]
truck2 = ['Chevy', 'silverado', 2001]
truck3 =['Mack', 'semi', 2009]
trucks = [];
trucks.push(truck1,truck2,truck3);
console.log("trucks:");
console.log(trucks);
console.log();

vehicles = [];
vehicles.push(cars, trucks);
console.log("vehicles:");
console.log(vehicles);
console.log();

console.log("specific items in 3 dimension array:");
console.log(vehicles[0][0][0]);
console.log(vehicles[1][0][1]);
console.log(vehicles[0][1][0]);
console.log(vehicles[0][0][1]);
console.log(vehicles[1][2][1]);
console.log();


console.log("add fule type to car dimension:");
car1.push('electric');
car2.push('diesel');
car3.push('unleaded');
console.log(cars);
console.log();

console.log(cars[2][3]);
console.log(cars[0][0]);
console.log(cars[1][1]);
console.log(cars[0][2]);


//feature = [color,]  
