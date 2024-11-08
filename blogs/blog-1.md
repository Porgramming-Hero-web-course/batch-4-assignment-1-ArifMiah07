# The Significance of Union and Intersection Types in TypeScript

Union and intersection types are powerful TypeScript features that help developers write cleaner, more expressive code. In this article, we'll explore how these types work and how they can be effectively applied.


## Union Type
A union type in TypeScript allows a variable to have one of several types. It is represented using the | operator.
Example: ```type Animal = "Dog" | "Cat" | "Bird";```
In this example, a variable of type Animal can have the value ```"Dog", "Cat", or "Bird"```.
## Intersection Type
An intersection type combines multiple types into a single type, representing the combination of all types. It is represented using the & operator.
Example: ```type Person = { name: string } & { age: number };```
In this example, a variable of type Person must have both a name property of type string and an age property of type number.

## Union Types

TypeScript’s type system allow us to build new types out of existing ones using a large variety of operators. we know how to write a few types, it’s time to start combining them in interesting ways.


### Defining a Union Type
The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

Let’s write a function that can operate on strings or numbers:
```ts
type idType = number | string // union literal ---> '|'

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });

// Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.

```

## Intersection Types

While union types allow a variable to be one of several types, intersection types ensure a variable meets the requirements of multiple types. In other words, an intersection type is a type that combines two or more types, enforcing that an object possesses all the properties of each intersected type. This is particularly useful when we want to model objects that have multiple roles or characteristics.

### Defining an Intersection Type
Intersection types are created by combining multiple types with the `&` operator. This operator enforces that all members of the intersected types are present in any object assigned that type.

Let’s consider a scenario where we have a `Person` type and an `Employee` type. Using intersection types, we can create a new type that has the properties of both `Person` and `Employee`.

```ts
type Person = {
  name: string;
  age: number;
}

type Employee = {
  employeeId: number;
  position: string;
}

// Defining an intersection type
type PersonEmployee = Person & Employee; // intersection ---> '&'

function introduce(person: PersonEmployee) {
  console.log(`Hello, my name is ${person.name}, I am ${person.age} years old and work as a ${person.position} with ID ${person.employeeId}.`);
}

// Valid object with both Person and Employee properties
const employee: PersonEmployee = {
  name: "Alice",
  age: 30,
  employeeId: 1234,
  position: "Software Engineer"
};

introduce(employee);

```

<!-- followed by: 
1. [https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types]
2. [https://stackoverflow.com/questions/61370779/typescript-understanding-union-and-intersection-types]
3. [https://www.geeksforgeeks.org/union-type-to-intersection-type-in-typescript/]
4. [https://medium.com/@brianridolcedev/union-and-intersection-types-in-typescript-406f6a2f541f]
 -->