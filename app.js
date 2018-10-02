let fullName = 'Bryan Clayton';
let age = 38;
let isMale = true;
let isFemale = false;
let surname = null;

let person = {
    name: fullName,
    age: age,
    dob: '01/06/1980',
}

person.age;
person.name;
person.dob;

console.log(person);

let friends = ['Tiffany', 'Bro', 'Jason'];

console.log (friends);

let friend = {
    Name: 'Tiffany',
    Age: 38,
    Address: {
        address1: '123 Main Street',
        city: 'Birmingham',
        state: 'Alabama'
    }
};

console.log (friend.Address);

let val1 = 2018
let val2 = 2007

let a = val1 - val2;

console.log (a);

let val = 25;

if(val == 26 || val < 25) {
    console.log('True');
} else {
    console.log('False');
}


console.log('Ended Program');

let people = ['Joi', 'Jada', 'Tiffany', 'Bro', 'Corey', 'Jason']

for (let i = 0; i <= people.length; i++) {
    console.log(i);

    if (people [i] == 'Bro') {
        console.log ('Found Him!');
        break;
    }
}


console.log (add(706,89));

console.log (subtract(706,89));

let sum = add(25 , 50);
let difference = subtract(25 , 35);

console.log(sum);
console.log(difference);

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}