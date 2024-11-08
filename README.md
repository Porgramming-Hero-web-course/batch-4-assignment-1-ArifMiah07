[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=17011733&assignment_repo_type=AssignmentRepo)


# Programming Hero L2B4 Assignment 1 -

### Assignment 1 - is a problem solving task with typescript. This assignment carry total 8 problems.

## Problem 1 :
```ts
// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    // Sample Input:
    sumArray([1, 2, 3, 4, 5]);

    // Sample Output:
    15;
  ```

## Solution 1:
```ts
type NumbersArray = number[];
const sumArray = (numbers : NumbersArray ) : number => {
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

--- 

# Problem 2:
```ts
// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

// Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// Sample Output:
[1, 2, 3, 4, 5]

```

# Solution 2:
```ts
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

```

---

# Problem 3:
```ts
// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

// Example:

Input: "I love typescript", "typescript"
Output: 1
// Sample Input:
countWordOccurrences("I love typescript", "typescript");

// Sample Output:
1;

```

# Solution 3:
```ts
const countWordOccurrences = (sentence: string, word: string) : number => {
    let counts = 0;
    const toLowerCaseSentenceSplitBySpace = sentence.toLowerCase().split(' ');
    toLowerCaseSentenceSplitBySpace.filter(countWord => {
        if(countWord === word.toLowerCase()){
            counts = counts + 1;
        }
    })
    return counts;
}

const wordOccurrences = countWordOccurrences("i i i i i i i i i i i i I i i i i I i i i love typescript and TypeScript and Typescript and TYPESCRIPT", "typescript");
console.log(wordOccurrences);

// Sample Input:
// countWordOccurrences("I love typescript", "typescript");

// Sample Output:
// 1;

```

---

# Problem 4:
```ts
// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// Sample Output 2:
24;

```

# Solution 4:
```ts
type Circle = {
    shape: 'circle';
    radius : number;
    
}
type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
    
}
type Shape = Circle | Rectangle;

const calculateShapeArea = (shape : Shape) : number =>{
    if(shape.shape === 'circle'){
        return Math.PI * shape.radius * shape.radius;
    }else if(shape.shape === 'rectangle'){
        return shape.width * shape.height;
    }
    return 0;
}

const circle : Circle = {
    shape: "circle",
    radius: 5,
}
const rectangle : Rectangle = {
    shape:"rectangle",
    width: 4,
    height: 6,
}


const circleArea = calculateShapeArea(circle);
console.log(circleArea);
const rectangleArea = calculateShapeArea(rectangle);
console.log(rectangleArea);

// Sample Output 1:
// 78.54;

// Sample Output 2:
// 24;

```