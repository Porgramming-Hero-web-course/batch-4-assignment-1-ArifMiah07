// Problem 2:
// Create a TypeScript function removeDuplicates that accepts an array of numbers 
// and returns a new array with duplicates removed. Preserve the original order of elements.

type NumbersArray2 = number[];
const removeDuplicates = (numbers : NumbersArray2) : NumbersArray2 => {
    return numbers.filter((num, i) => numbers.indexOf(num) === i);
} 
const uniqueArray = removeDuplicates([1, 2,4444, 55555,2222,2222,2222, 5]);
console.log(uniqueArray);

// Sample Input:
// removeDuplicates([1, 2, 2, 3, 4, 4, 5])
// Sample Output:
// [1, 2, 3, 4, 5]
