// Problem 7:
// Create a TypeScript class Car with properties make, model, and year. 
// Include a method getCarAge that returns the car's age based on the current year.

// todo: 
// 1. --> create a TypeScript class Car  ----> done ---<class Car {}>---
// 1. --> Create a TypeScript class Car with properties make, model, and year. ----> done ---<constructor(make: string, model: string, year: number){}>---
// 1. --> Include a method getCarAge ----> done ---<getCarAge(){}>---
// 1. --> Include a method getCarAge that returns the car's age based on the current year. ----> done ---<    getCarAge(){let currentYear = 2024; return currentYear -  this.year}>---
// 1. --> ----> ---<>---

class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge(){
        let currentYear = 2024;//assuming current year is 2024
        return currentYear -  this.year;
    }
}

// Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
// car.getCarAge();
console.log(car.getCarAge());

// Sample Output 1:
// 6 (assuming current year is 2024)