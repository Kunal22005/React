console.log("Hello, World!");
let username
 = "Alice";
console.log("My name is " + username);
let age = 30;
console.log("I am " + age + " years old.");

function greet(person) {

    return "Hello World, " + person + "!";
}
console.log(greet(username));
let numbers = [1, 2, 3, 4, 5];
console.log("Numbers: " + numbers);
let sum = numbers.reduce((a, b) => a + b, 0);
console.log("Sum of numbers: " + sum);

let person = {
    name: "Bob",
    age: 25,
    greet: function() {
        return "Hi, I'm " + this.name + " and I'm " + this.age + " years old.";
    }           
};
console.log(person.greet());
console.log(person["name"]);