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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
// let message = 'Bienvenue';
// console.log(message);
// let isBeginner:boolean = false;
// let firstname:string = "Bouyagui";
// let idCard:number= 5;
var tuple;
tuple = [5, 'bouyagui', true];
// console.log(tuple);
// tuple.push("just for the test");
//la propriete readonly n'est utilise que pour la lecture. Aucune methode 
//ne peut etre assigne a une variable a qui a ete assigne la prop readonly
//ts object type
var car = {
    type: 'BMW',
    model: 'A4',
    annee: 2015
};
// console.log(car);
// enum color{red, green, blue}
// let c:color = color.green;
// console.log(c);
// define typescript function   
// function add(num1:number, num2:number):number{
//     return num1 + num2;
// }
// console.log(add(5, 5));
// define typescript function with optional parameter
// function add2(num1:number, num2?:number):number{
//     if(num2)
//         return num1 + num2;
//     else
//         return num1;
// }
// console.log(add2(5));
// define typescript function with default parameter
// function add3(num1:number, num2:number = 10):number{
//     if(num2)
//         return num1 + num2;
//     else
//         return num1;
// }
// console.log(add3(5));
// define typescript function with interface
// interface Person{
//     firstname:string;
//     lastname:string;
// }
// function fullname(person:Person){
//     console.log(`${person.firstname} ${person.lastname}`);
// }
// let p = {
//     firstname: 'Bouyagui',
//     lastname: 'Mohamed'
// }
// fullname(p);
// define a ts array and assign method to it
// let numbers:number[] = [1, 2, 3];
// numbers.push(4);
// define a ts array and assign method to it
// let numbers2:Array<number> = [1, 2, 3];
// numbers2.push(4);
// define a ts tuple
// let person1:[string, number] = ['Bouyagui', 5];
// les enum sont des types de données qui permettent de définir un ensemble
//  de constantes numériques ou de chaînes de caractères avec des noms
// enum CardinalDirection {
//     North = 1,
//     East,
//     South,
//     West
// }
// let currentDirection = CardinalDirection.North
// let currentDirection2 = CardinalDirection.West
// console.log(currentDirection);
// console.log(currentDirection2);
// les alias de type permettent de créer un nouveau nom pour un type existant
// type Person2 = {
//     name: string;
//     age: number;
// }
// let person: Person2 = {
//     name: 'Bouyagui',   
//     age: 30
// }
// console.log(person);
// type Voiture = {
//     model: string,
//     marque: string
// }
// let voiture: Voiture = {
//     model: 'Audi',
//     marque: 'A4'
// }
// console.log(voiture);
// interface Rectangle {
//     longueur: number;
//     largeur: number;
// }
// const rectangle: Rectangle = {
//     longueur: 5,
//     largeur: 2
// }
// console.log(rectangle);
// function printValue(value: string | number | boolean)
// {
//     console.log(`ma valeur est ${value}`);
// }
// printValue(5);
// printValue('Bouyagui');
// printValue(true);
//function rest parameter
// function add(...numbers: number[]){
//     return numbers.reduce((a, b) => a + b);
// }
// console.log(add(1, 2, 3, 4, 5));
function add(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
// console.log(add(1, 2, 3, 4, 5));
var x = "hello";
// console.log((x as string).toUpperCase());
//? ts class
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.getName = function () {
        return this.name;
    };
    return Car;
}());
var car1 = new Car('BMW');
// console.log(car1.getName());
// class BMW extends Car{
//      public constructor(bname: string)
//     {
//         super(bname);
//     }
//     title()
//     {
//         console.log(`this is a test for the iheritence concept`);
//     }
// }
// let e1 = new BMW('Bouyagui');
// e1.getName();
// e1.title();
// console.log((<string>x).toUpperCase());
//?ts generic function
function displayType(arg) {
    return arg;
}
// console.log(displayType<string>('Bouyagui'));
// console.log(displayType<number>(5));
// console.log(displayType<boolean>(true));
//ts generic class
var NameValue = /** @class */ (function () {
    function NameValue(name) {
        this.name = name;
    }
    NameValue.prototype.setValue = function (value) {
        this._value = value;
    };
    NameValue.prototype.getValue = function () {
        return this._value;
    };
    NameValue.prototype.toString = function () {
        return "".concat(this.name, " = ").concat(this._value);
    };
    return NameValue;
}());
var value = new NameValue('Mon nombre');
value.setValue(5);
// console.log(value.toString());
function createPair(first, second) {
    return [first, second];
}
var pointPart = {};
pointPart.x = 5;
pointPart.y = 10;
var mycar = {
    model: 'Audi',
    marque: 'A4',
    mileage: 1000 // obligatoire
};
//des que j'applique le type Required<Car> je dois obligatoirement définir la propriété mileage
// console.log(mycar);
//?ts Record utility types permet de créer un type à partir d'un autre type
var nameAgeMap = {
    'Bouyagui': 30,
    'Mohamed': 25
};
// console.log(nameAgeMap);
//?ts Omit utility types permet de supprimer des propriétés d'un type
// interface Person{
//     name: string,
//     age: number,
//     location?: string
// }
// const bob: Omit<Person, 'age' | 'location' >={name: 'Bob'}
// console.log(bob);
//?ts recursion
// function factorial(n: number): number
// {
//     if (n === 1){
//         return 1;
//     }
//     return n * factorial(n - 1);
//     }
//     console.log(factorial(5));
//Écrire une fonction qui prend un objet et retourne le nombre de propriétés qu'il contient.
function countProperties(obj) {
    return Object.keys(obj).length;
}
// console.log(countProperties({name: 'Bouyagui', age: 30}));
var myObect = {
    type: 1,
    model: 'Audi'
};
// console.log(myObect);
function removeProperty(obj, key) {
    var _a = obj, _b = key, omitted = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
    return rest;
}
//Écrire une fonction qui prend un tableau d'entiers en entrée et qui renvoie le plus grand nombre présent dans le tableau
function max(numbers) {
    return Math.max.apply(Math, numbers);
}
console.log(max([1, 2, 3, 4, 5]));
//Écrire une fonction qui prend une chaîne de caractères en entrée et qui renvoie cette même chaîne mais avec les caractères inversés (par exemple "Hello" devient "olleH").
function reverseString(str) {
    return str.split('').reverse().join('');
}
// console.log(reverseString('Bouyagui'));
//Écrire une fonction qui prend un tableau d'entiers en entrée et qui renvoie un tableau contenant les mêmes entiers, mais triés par ordre croissantÉcrire une fonction qui prend un tableau d'entiers en entrée et qui renvoie un tableau contenant les mêmes entiers, mais triés par ordre croissant
function sortArray(numbers) {
    return numbers.sort(function (a, b) { return a - b; });
}
console.log(sortArray([1, 2, 3, 4, 5]));
//Écrire une fonction qui prend un tableau d'entiers en entrée et qui renvoie un tableau contenant les mêmes entiers, mais triés par ordre décroissant
function sortArrayDesc(numbers) {
    return numbers.sort(function (a, b) { return b - a; });
}
console.log(sortArrayDesc([1, 2, 3, 4, 5]));
//Écrire une fonction qui prend un nombre entier en entrée et qui renvoie la somme de tous les entiers de 1 à ce nombre
function sum(numbers) {
    var sum = 0;
    for (var i = 1; i <= numbers; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum(5));
//Écrire une fonction qui prend un tableau d'entiers en entrée et qui renvoie un tableau contenant les mêmes entiers mais sans les doublons (par exemple, [1, 2, 3, 2, 4] devient [1, 2, 3, 4])
function removeDuplicates(numbers) {
    return __spreadArray([], new Set(numbers), true);
}
console.log(removeDuplicates([1, 2, 3, 2, 4]));
