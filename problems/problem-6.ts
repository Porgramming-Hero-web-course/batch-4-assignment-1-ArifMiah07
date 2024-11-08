// Problem 6:
// Define an interface Profile with properties name, age, and email. 
// Create a function updateProfile that accepts an object of type Profile and 
// an object of type Partial representing the updates. The function should return the updated profile.
// 

// todo: 
// 1. --> Define an interface Profile with properties name, age, and email. ----> done ---<interface Profile {name: string;age: number;email: string;}>---
// 2. --> Create a function updateProfile that accepts an object of type Profile ----> done ---<const updateProfile : Profile = () => {}>---
// 1. --> ----> ---<type PartialProfile = Partial<Profile>>---
// 1. --> ----> ---<>---
// 1. --> ----> ---<>---
// 1. --> ----> ---<>---
// 1. --> ----> ---<>---

interface Profile {
    name: string;
    age: number;
    email: string;
}
// Partial---> optional
type PartialProfile = Partial<Profile>

const updateProfile = (profile : Profile , update: PartialProfile) => {
    return {profile, update}
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