[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=17011733&assignment_repo_type=AssignmentRepo)


# Programming Hero L2B4 Assignment 1 -

### Assignment 1 - is a problem solving task with typescript. This assignment carry total 8 problems.

## Problem 1 :
```ts
<!-- Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array. -->

    // Sample Input:
    sumArray([1, 2, 3, 4, 5]);

    // Sample Output:
    15;
  ```

## Answer:
```ts
type NumbersArray = number[];
const sumArray = (numbers : NumbersArray ) : number=>{
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

// Sample Output:
// 150;
```



