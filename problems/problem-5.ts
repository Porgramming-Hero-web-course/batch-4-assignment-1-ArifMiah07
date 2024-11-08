// Problem 5:
// Write a generic function getProperty that takes an object and 
// a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

// Hints: Use keyof


// todo:
// 1. --> Write a generic function getProperty ----> done  ---<const getProperty = () =>{}>---
// 2. --> Write a generic function getProperty that takes an object  ----> done ---<(person: T>---
// 3. --> Write a generic function getProperty that takes an object and a property ----> done ---<(person: T, property: P)>---
// 4. --> returns the property value ----> done ---<return person[property]>---
// 5. -->  Add a constraint to ensure the property name exists on the object ----> done ---<P extends keyof T>---


const getProperty = <T, P extends keyof T >(person: T, property: P) : T[P] => {
    return person[property];
} 

// Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, 'name'));
// console.log(getProperty(person, 'age'));//30

// Sample Output:
// Alice;



