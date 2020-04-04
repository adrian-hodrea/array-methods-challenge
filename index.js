
/** Array Functions **/
/*
0. Write a function that receives the array below as parameters and returns a new array which has all the elements added with 2
*/
var strArr = ['13', '2', '34', '14', '5', '86', '3.46'];

const typeCastAndAdd = strArr => {
  return strArr.map( item => Number(item) + 2 );
}

console.log('Task 0: ', typeCastAndAdd(strArr));

/* ---------------------------------                ------------------------------------- */
/* 
1. Implement a function that receives an array of objects and a key name and returns an array with all the values corresponding to the key of the objects in the array.
*/
const demoArr = [
  {id: 1, color: 'red', height: 15, width: 20, distance: 10},
  {id: 2, color: 'green', height: 5, width: 30, distance: 15},
  {id: 3, color: 'turqoize', height: 7, width: 9, distance: 8},
  {id: 4, color: 'blue', height: 2, width: 3, distance: 3},
  {id: 5, color: 'red', height: 10, width: 10, distance: 2},
  {id: 6, color: 'crimson', height: 7, width: 8, distance: 16},
];

const pluck = (demoArr, keyName) => {
  return demoArr.map( item => item[keyName]);
};

console.log('Task 1: ',pluck(demoArr, 'color'));  // => ['red', 'green', 'turqoize' .......];

/* ---------------------------------                ------------------------------------- */
