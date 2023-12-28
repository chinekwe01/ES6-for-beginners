// JavaScript ES6 for Beginners

// const and let
let age = 20;
const name = "Doe";

// arrow functions
// const array = [1, 2, 3];

// template string
const greeting = (name) => {
    const string = 'Hello, ' + name + ' !';
    const templateString = `Hello, ${2 + 11} !`;
}
greeting('John')

// default parameters
// const add = (a = 0, b = 2) => console.log(a + b);

// array destructuring
const array = [1, 2, 3];
const [ first, second, third ] = array;

// object destructuring
const object = {
    channelName: "Tech Pips",
    views: 1500,
}
const { channelName, views} = object;

// rest operator
const add = (a, b, c) => console.log([a, b, c].reduce((a, b ) => a + b, 0));
add(1, 2, 3);

// spread operator