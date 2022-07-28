//Task 3
const fruits = ['Apple', 'Banana', 'Grape', 'Orange', 'Pear', 'Watermelon'];

console.log(fruits.indexOf('Orange'))

function searchArray(searchWord, arr){
    for(let element of searchWord)
        if(element === arr)
        return element;
    return false;
}

//Task 3.2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumbers(array){

    return array.filter(x => {
       if(x % 2 == 0){
        return x
       }
    })
}
console.log(evenNumbers(numbers));


//Task 3.3
const colors = ['green', 'yellow', 'red', 'blue'];
const randomColors = colors[Math.floor(Math.random() * colors.length)];
console.log(randomColors);
























