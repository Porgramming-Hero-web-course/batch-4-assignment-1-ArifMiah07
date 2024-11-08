// Problem 1:
// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.


type NumbersArray = number[];
const sumArray = (numbers : NumbersArray ) : number=> {
    if(numbers.length > 0){
        let total = 0;
        for(let i = 0; i <= numbers.length - 1 ; i++){
            total += numbers[i];
        }
        return total;
    }
    return 0;
}

const sum = sumArray([10, 20, 30, 40, 50]);
console.log(sum)


// Sample Input:
// sumArray([1, 2, 3, 4, 5]);
// Sample Output:
// 150;