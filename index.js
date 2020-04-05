
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

console.log('Demo Array: ', demoArr);

const pluck = (demoArr, keyName) => {
  return demoArr.map( item => item[keyName] );
};

console.log('Task 1: ',pluck(demoArr, 'color'));  // => ['red', 'green', 'turqoize' .......];

/* ---------------------------------                ------------------------------------- */

/*
2. Implement a function that returns the area of all elements in the above array, area = height * width.
*/

const calculateArea = demoArr => {
  return demoArr.map( ({height, width}) => height * width );
}

console.log('Task 2: ',calculateArea(demoArr));

/* ---------------------------------                ------------------------------------- */

/*
3. Write a function that returns a subset of the above array where the elements have an area smaller or equal to 100
*/

const filterArr = demoArr => {
  return demoArr.filter( item => {
    let {height, width} = item;
    return height * width <= 100; 
  } )
}

console.log('Task 3: ',filterArr(demoArr));

/* ---------------------------------                ------------------------------------- */

/*
4. Implement a function called reject, which receives an array and an iterator function.
The iterator function receives each element in the array as a parameter and must return true or false. 
If it returns true, the element will not be included by the parent function in the resulting array.
If returns false it will be included.
*/

const iterator = item => {
  if (item.distance >= 10) {
    return false
  };
  return true;
}

const reject = (demoArr,iterator) => {
  return demoArr.filter( item => iterator(item) );
}

console.log('Task 4: ',reject(demoArr, iterator)); // return an array of objects with height < 10

/* ---------------------------------                ------------------------------------- */

/*
5. Write a function that return the element with the color 'crimson'
*/

const findColor = (demoArr, color) => {
  return demoArr.find( item => item.color === color );
}

console.log('Task 5: ',findColor(demoArr, 'crimson'));

/* ---------------------------------                ------------------------------------- */

/*
6. Write a function that returns true if all elements in the array have the area > = 10, false otherwise.
*/

const areasAreBigger = (demoArr, minArea) => {
  return demoArr.every( item => {
    let {height, width} = item;
    return height * width >= minArea; 
  })
}

console.log('Task 6: ',areasAreBigger(demoArr, 10))

/* ---------------------------------                ------------------------------------- */

/*
7. Write a function that returns true if at least one of the array elements has the color 'green';
*/

const atLeastOneIsOfColor = (demoArr, color) => {
  return demoArr.some( item => item.color === color)
}

console.log('Task 7: ',atLeastOneIsOfColor(demoArr, 'balarie'));