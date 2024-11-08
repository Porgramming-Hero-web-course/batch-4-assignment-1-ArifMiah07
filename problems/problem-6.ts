// Problem 6:
// Define an interface Profile with properties name, age, and email. 
// Create a function updateProfile that accepts an object of type Profile and 
// an object of type Partial representing the updates. The function should return the updated profile.
// 

// todo: 
// 1. --> Define an interface Profile with properties name, age, and email. ----> done ---<interface Profile {name: string;age: number;email: string;}>---
// 2. --> Create a function updateProfile that accepts an object of type Profile ----> done ---<const updateProfile = (person : Profile) => {}>---
// 3. --> and an object of type Partial representing the updates ----> done ---<type PartialProfile = Partial<Profile>>---
// 4. --> The function should return the updated profile. ----> done ---< : Profile => {return {...profile, ...updates}}>---
// 1. --> ----> ---<>---

interface Profile {
    name: string;
    age: number;
    email: string;
}
// Partial---> optional
type PartialProfile = Partial<Profile>

const updateProfile = (profile : Profile , updates: PartialProfile) : Profile => {
    return {...profile, ...updates};
}


// Sample Input :
const myProfile : Profile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));

// Sample Output:
// {
//   name: "Alice",
//   age: 26,
//   email: "alice@example.com"
// }