"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
let tuple;
tuple = [5, 'bouyagui', true];
const car = {
    type: 'BMW',
    model: 'A4',
    annee: 2015
};
function add(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
let x = "hello";
class Car {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const car1 = new Car('BMW');
function displayType(arg) {
    return arg;
}
class NameValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name} = ${this._value}`;
    }
}
let value = new NameValue('Mon nombre');
value.setValue(5);
function createPair(first, second) {
    return [first, second];
}
let pointPart = {};
pointPart.x = 5;
pointPart.y = 10;
let mycar = {
    model: 'Audi',
    marque: 'A4',
    mileage: 1000
};
const nameAgeMap = {
    'Bouyagui': 30,
    'Mohamed': 25
};
function countProperties(obj) {
    return Object.keys(obj).length;
}
const myObect = {
    type: 1,
    model: 'Audi'
};
function removeProperty(obj, key) {
    const _a = obj, _b = key, omitted = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
    return rest;
}
function max(numbers) {
    return Math.max(...numbers);
}
function reverseString(str) {
    return str.split('').reverse().join('');
}
function sortArray(numbers) {
    return numbers.sort((a, b) => a - b);
}
function sortArrayDesc(numbers) {
    return numbers.sort((a, b) => b - a);
}
function sum(numbers) {
    let sum = 0;
    for (let i = 1; i <= numbers; i++) {
        sum += i;
    }
    return sum;
}
function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}
console.log(removeDuplicates([1, 2, 3, 2, 4]));
function filterAboveAverage(numbers) {
    const average = numbers.reduce((a, b) => a + b) / numbers.length;
    return numbers.filter(n => n > average);
}
function longestWord(words) {
    return words.reduce((a, b) => a.length > b.length ? a : b);
}
function sumOdd(numbers) {
    let sum = 0;
    for (let i = 1; i <= numbers; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}
const person = {
    name: 'Bouyagui',
    age: 27,
    email: 'bouyaguidiakite2@gmail.com',
    introduce() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
};
console.log(person.introduce());
class Employee {
    constructor(name, age, email, employeeID) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.employeeID = employeeID;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
    getEmployeeID() {
        return this.employeeID;
    }
}
const employee = new Employee('Bouyagui', 27, 'Bouyagui@gmail.com', 1);
console.log(employee.introduce());
console.log(employee.getEmployeeID());
function oldestPerson(person1, person2) {
    return person1.age > person2.age ? person1 : person2;
}
console.log(oldestPerson(person, employee));
const aire = {
    color: 'red',
    area: 10,
    getArea() {
        return this.area;
    }
};
console.log(aire.getArea());
class Circle {
    constructor(color, area) {
        this.color = color;
        this.area = area;
    }
    getArea() {
        return this.area;
    }
}
const circle = new Circle('red', 10);
console.log(circle);
function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}
const add5 = makeAdder(5);
console.log(add5(2));
function sumOdd2(numbers) {
    return numbers.filter(num => num % 2 !== 0).reduce((a, b) => a + b, 0);
}
console.log(sumOdd2([1, 2, 3, 4, 5]));
function getUserData(user) {
    return user.adresse.codePostal;
}
const user = {
    name: 'Bouyagui',
    age: 27,
    email: 'bouyagui@gmail.com',
    adresse: {
        ville: 'Dakar',
        codePostal: 11000,
        pays: 'Senegal'
    }
};
console.log(getUserData(user));
function statusCode(code) {
    if (typeof code === 'string') {
        console.log(`My status code is: ${code.toUpperCase()}`);
    }
    else {
        console.log(`My status code is a number: ${code}`);
    }
}
statusCode(200);
function calculAverage(students) {
    return students.map((student) => {
        const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
        const average = sum / student.grades.length;
        return {
            name: student.name,
            average
        };
    });
}
const students = [
    {
        name: 'Bouyagui',
        grades: [13, 17, 15],
    },
    {
        name: 'Diakite',
        grades: [12, 16, 14],
    },
    {
        name: 'Amine',
        grades: [11, 15, 13],
    }
];
const average = calculAverage(students);
average.forEach((std) => {
    console.log(`name: ${std.name},  moyenne: ${std.average}
    `);
});
function createStore(reducer) {
    let state = 0;
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
    };
    return {
        getState,
        dispatch
    };
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
};
const store = createStore(reducer);
store.dispatch({ type: 'INCREMENT', payload: 5 });
store.dispatch({ type: 'DECREMENT', payload: 3 });
console.log(store.getState());
//# sourceMappingURL=main.js.map