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
// function average(...numbers) {
//   if (numbers.length === 0) {
//     return 0;
//   }
//   const sum = numbers.reduce((acc, curr) => acc + curr, 0);
//   return sum / numbers.length;
// }
// console.log(average(10, 20, 30, 40, 50));

//12
// function checkValue(value) {
//   // short-circuit
//   value && console.log("Value exists");
//   value || console.log("Value is undefined");
// }

// checkValue("Hello");       // Output: Value exists
// checkValue(undefined);     // Output: Value is undefined
// checkValue("");            // Output: Value is undefined
// checkValue(0);             // Output: Value is undefined
// checkValue("World");       // Output: Value exists

//13
// class BankAccount {
//   #balance;

//   constructor(initialBalance = 0) {
//     this.#balance = initialBalance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// class SavingsAccount extends BankAccount {
//   #interestRate;

//   constructor(initialBalance = 0, interestRate = 0) {
//     super(initialBalance);
//     this.#interestRate = interestRate;
//   }

//   addInterest() {
//     const interest = this.getBalance() * (this.#interestRate / 100);
//     this.deposit(interest);
//   }
// }

// const myAccount = new SavingsAccount(0, 5);
// myAccount.deposit(100);
// myAccount.addInterest();

// console.log("Balance:", myAccount.getBalance());

//14
// function filterEven(numbers) {
//   return numbers.filter(num => num % 2 === 0 ? true : false);
// }

// console.log(filterEven([1, 2, 3, 4, 5, 6]));

//15
// function* generateEvenNumbers(limit) {
//   for (let i = 2; i <= limit; i += 2) {
//     yield i;
//   }
// }

// const evenNumbers = generateEvenNumbers(10);
// for (let num of evenNumbers) {
//   console.log(num);
// }

//16
// function transformNames(arr) {
//   return arr.map(obj => obj.name.toUpperCase());
// }

// const input = [{ name: "Alice" }, { name: "Bob" }];
// const output = transformNames(input);

// console.log(output);

//17
// async function fetchPostTitles() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const posts = await response.json();
    
//     posts.forEach(post => {
//       console.log(post.title);
//     });
//   } catch (error) {
//     console.error("Failed to fetch posts:", error);
//   }
// }

// fetchPostTitles();

//18
// function createDynamicObject(key, value) {
//   return {
//     [key]: value
//   };
// }

// const result = createDynamicObject("color", "blue");
// console.log(result);

//19
// function findProduct(numbers) {
//   return numbers.reduce((acc, curr) => acc * curr, 1);
// }

// const result = findProduct([2, 3, 4, 5]);
// console.log(result);

//20
// class Shape {
//   area() {
//     throw new Error("area() must be implemented by subclasses");
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   area() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Rectangle extends Shape {
//   constructor(width, height) {
//     super();
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }
// }

// const myCircle = new Circle(5);
// const myRectangle = new Rectangle(4, 6);

// console.log("Circle area:", myCircle.area().toFixed(2));
// console.log("Rectangle area:", myRectangle.area());