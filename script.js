//1
// const arr = [1,2,3,4,5];
// const output = arr.map(num => num*num);
// console.log(output);    

//2
// const arr = [12, 22, 32, 42, 52];
// const output = arr.reduce((acc,curr) => acc += curr,0);
// console.log(output);

//3  
// const arr = [2, 3, 5, 7, 9, 11, 13, 15, 17, 21, 25];
// const output = arr.filter(x => x % 5 == 0);
// console.log(output);

//4
// function* fibonacci(n) {
//   let a = 0, b = 1;
//   for (let i = 0; i < n; i++) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }

// const n = 5;
// console.log(Array.from(fibonacci(n)));

//5
// function fetchUserData(callback) {
//   setTimeout(() => {
//     const users = [
//       { name: "Alice" },
//       { name: "Bob" },
//       { name: "Charlie" }
//     ];
//     callback(users);
//   }, 1000);
// }

// function processUsers(users) {
//   const result = users
//     .map(user => `Name: ${user.name}`)
//     .join(", ");
//   console.log(result);
// }

// fetchUserData(processUsers);

//6
// async function fetchUserNames() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     if (!response.ok) {
//       throw new Error("Network response was not OK");
//     }

//     const data = await response.json();
//     const names = data.map(user => user.name);
//     console.log("User names:", names);
//   } catch (error) {
//     console.error("Something went wrong:", error.message);
//   }
// }

// fetchUserNames();

//7
// class Vehicle {
//   constructor(brand) {
//     this.brand = brand;
//   }

//   displayDetails() {
//     console.log(`Brand: ${this.brand}`);
//   }
// }

// class Car extends Vehicle {
//   constructor(brand, model) {
//     super(brand);
//     this.model = model;
//   }

//   displayDetails() {
//     console.log(`Brand: ${this.brand}, Model: ${this.model}`);
//   }
// }

// const myCar = new Car("Toyota", "Camry");
// myCar.displayDetails();

// const genericVehicle = new Vehicle("GenericBrand");
// genericVehicle.displayDetails();

//8
// function uniqueValues(...args) {
//   const unique = new Set(args);
//   return [...unique];
// }

// const result = uniqueValues(1, 2, 2, 3, 4, 4, 5);
// console.log(result); 

//9
// function createPerson(name, age) {
//   return {
//     name,
//     age,
//     greet() {
//       return `Hi, I’m ${this.name}`;
//     }
//   };
// }

// const person = createPerson("Alice", 25);
// console.log(person);

//10
// function validateUserData(data) {
//   const age = data?.user?.profile?.age;
//   const message = age ? "Valid age" : "No age provided";
//   return message;
// }

// const input1 = { user: { profile: { age: 25 } } };
// console.log(validateUserData(input1)); 

// const input2 = { user: null };
// console.log(validateUserData(input2)); 

// const input3 = {};
// console.log(validateUserData(input3));

// const input4 = { user: { profile: {} } };
// console.log(validateUserData(input4));

//11







