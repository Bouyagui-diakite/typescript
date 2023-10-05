export{}
// let message = 'Bienvenue';
// console.log(message);

// let isBeginner:boolean = false;
// let firstname:string = "Bouyagui";
// let idCard:number= 5;

let tuple: readonly [number, string, boolean];
tuple = [5, 'bouyagui', true ]
// console.log(tuple);
// tuple.push("just for the test");
//la propriete readonly n'est utilise que pour la lecture. Aucune methode 
//ne peut etre assigne a une variable a qui a ete assigne la prop readonly


//ts object type

const car :{type: string, model:string, annee:number} ={
    type: 'BMW',
    model: 'A4',
    annee: 2015
}


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

function add(a: number, b: number, ...rest: number[])
{
    return a + b + rest.reduce((p,c) => p+c, 0);
}
// console.log(add(1, 2, 3, 4, 5));



let x: unknown = "hello";
// console.log((x as string).toUpperCase());

//? ts class
class Car{

    public constructor( private name: string){}
    
    public getName(): string
    {
        return this.name;
    }

}

const car1 = new Car('BMW');
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
function displayType<T>(arg: T): T{
    return arg;
}

// console.log(displayType<string>('Bouyagui'));

// console.log(displayType<number>(5));
// console.log(displayType<boolean>(true));


//ts generic class
class NameValue<T>
{
    private _value: T | undefined;

    constructor(private name: string){}

    public setValue(value: T)
    {
        this._value = value;
    }

    public getValue(): T | undefined{
        return this._value;
    }

    public toString(): string{
        return `${this.name} = ${this._value}`;
    }
}
let value  = new NameValue<number>('Mon nombre');
value.setValue(5);
// console.log(value.toString());

function createPair<S, T>(first: S, second: T):[S, T]
{
    return [first, second];
}
// console.log(createPair<string, number>('Bouyagui', 5));


//?ts generic extends keyword 
// function createLoggedPair<S extends string | number, T extends string| number>(first: S, second: T): [S, T]
// {
//     console.log(`Creating pair: first = ${first}, second = ${second}`);
//     return [first, second];
    
// }

// console.log(createLoggedPair<string, number>('Bouyagui', 5));


//?ts partial utility types change les propriétés d'un type en optionnel

interface Point
{
    x: number,
    y: number
}
let pointPart: Partial<Point> = {};
pointPart.x = 5;
pointPart.y = 10;

// console.log(pointPart);


//?ts required utility types change les propriétés d'un type en obligatoire
interface Car2{
    model: string;
    marque: string;
    mileage?: number; // optionnel
}
let mycar:  Required<Car2> = 
{
    model: 'Audi',
    marque: 'A4',
    mileage: 1000 // obligatoire

};
//des que j'applique le type Required<Car> je dois obligatoirement définir la propriété mileage
// console.log(mycar);



//?ts Record utility types permet de créer un type à partir d'un autre type
const nameAgeMap: Record<string, number> = {
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

function countProperties(obj: any): number
{
    return Object.keys(obj).length;
}

// console.log(countProperties({name: 'Bouyagui', age: 30}));


const myObect:  {type: number , model:string} = 
{
    type: 1,
    model: 'Audi'
}

// console.log(myObect);


function removeProperty(obj: any , key:string): any
{
    const {[key]: omitted, ...rest} = obj;
    return rest;
}

//Écrire une fonction qui prend un tableau d'entiers en entrée et qui renvoie le plus grand nombre présent dans le tableau

function max(numbers: number[]): number
{
    return Math.max(...numbers);
}

// console.log(max([1, 2, 3, 4, 5]));

//Écrire une fonction qui prend une chaîne de caractères en entrée et qui renvoie cette même chaîne mais avec les caractères inversés (par exemple "Hello" devient "olleH").

function reverseString(str: string): string
{
    return str.split('').reverse().join('');
}

// console.log(reverseString('Bouyagui'));


//Écrire une fonction qui prend un tableau d'entiers en entrée et qui renvoie un tableau contenant les mêmes entiers, mais triés par ordre croissantÉcrire une fonction qui prend un tableau d'entiers en entrée et qui renvoie un tableau contenant les mêmes entiers, mais triés par ordre croissant

function sortArray(numbers: number[]): number[]
{
    return numbers.sort((a, b) => a - b);
}

// console.log(sortArray([1, 2, 3, 4, 5]));

//Écrire une fonction qui prend un tableau d'entiers en entrée et qui renvoie un tableau contenant les mêmes entiers, mais triés par ordre décroissant

function sortArrayDesc(numbers: number[]): number[]
{
    return numbers.sort((a, b) => b - a);
}

// console.log(sortArrayDesc([1, 2, 3, 4, 5]));


//Écrire une fonction qui prend un nombre entier en entrée et qui renvoie la somme de tous les entiers de 1 à ce nombre

function sum(numbers: number): number
{
    let sum = 0;
    for (let i = 1; i <= numbers; i++){
        sum += i;
    }
    return sum;
}

// console.log(sum(5));
//Écrire une fonction qui prend un tableau d'entiers en entrée et qui renvoie un tableau contenant les mêmes entiers mais sans les doublons (par exemple, [1, 2, 3, 2, 4] devient [1, 2, 3, 4])

function removeDuplicates(numbers: number[]): number[]
{
    return [...new Set(numbers)];

}

console.log(removeDuplicates([1, 2, 3, 2, 4]));


//Écrire une fonction qui prend en paramètre un tableau de nombres et qui retourne un nouveau tableau contenant tous les nombres qui sont supérieurs à la moyenne des nombres du tableau original

function filterAboveAverage(numbers: number[]): number[]
{
    const average = numbers.reduce((a, b) => a + b) / numbers.length;
    return numbers.filter(n => n > average);
   
}

// console.log(filterAboveAverage([1, 2, 3, 2, 4]));

//Écrire une fonction qui prend en paramètre un tableau de chaînes de caractères et qui retourne le plus long mot de ce tableau.

function longestWord(words: string[]): string
{
    return words.reduce((a, b) => a.length > b.length ? a : b);
}

// console.log(longestWord(['Bouyagui', 'Mohamed', 'Amine']));

//Écrire une fonction qui prend en paramètre un nombre entier et qui retourne la somme de tous les nombres impairs inférieurs ou égaux à ce nombre.

function sumOdd(numbers: number): number
{
    let sum = 0;
    for (let i = 1; i <= numbers; i++){
        if (i % 2 !== 0){
            sum += i;
        }
    }
    return sum;
}

// console.log(sumOdd(5));


//Créer une interface pour un objet "Person" avec les propriétés "name" (string), "age" (number), "email" (string) et une méthode "introduce" qui retourne une chaîne de caractères introduisant la personne

interface Person{
    name: string;
    age: number;
    email: string;

    introduce(): string;

}

const person: Person = {
    name: 'Bouyagui',
    age: 27,
    email: 'bouyaguidiakite2@gmail.com',

    introduce(){
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
}

console.log(person.introduce());

//Créer une classe "Employee" qui implémente l'interface "Person" et ajouter une propriété "employeeID" (string) et une méthode "getEmployeeID" qui retourne l'ID de l'employé.

class Employee implements Person{

    constructor(public name: string, public age: number, public email: string, public employeeID: number){}

    introduce(){
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }

    getEmployeeID(){
        return this.employeeID;
    }



}

const employee = new Employee('Bouyagui', 27, 'Bouyagui@gmail.com', 1)

console.log(employee.introduce());

console.log(employee.getEmployeeID());






//Écrire une fonction qui prend en entrée deux objets "Person" et retourne l'objet ayant l'âge le plus élevé.


function oldestPerson(person1: Person, person2: Person): Person
{
    return person1.age > person2.age ? person1 : person2;
}

console.log(oldestPerson(person, employee));


//Créer une interface pour un objet "Shape" avec les propriétés "color" (string) et "area" (number) et une méthode "getArea" qui retourne l'aire de la forme

interface Shape{
    color: string;
    area: number;

    getArea(): number;

}

const aire: Shape = {
    color: 'red',
    area: 10,

    getArea(){
        return this.area;
    }
}

console.log(aire.getArea());


class Circle implements Shape
{
    constructor(public color: string, public area: number){}

    getArea(){
        return this.area;
    }


}

const circle = new Circle('red', 10);

console.log(circle);



//an example with closure

function makeAdder(x: number): (y: number) => number

{
    return function(y: number): number{
        return x + y;
    }


}

const add5 = makeAdder(5);

console.log(add5(2));


//Écrire un algorithme qui calcule la somme de tous les nombres impairs d'un tableau donné

function sumOdd2(numbers: number[]): number
{
    return numbers.filter(num => num % 2!==0).reduce((a, b) => a+b, 0)
}

console.log(sumOdd2([1, 2, 3, 4, 5]));



type User = {
    name: string;
    age: number;
    email: string
    adresse : {
        ville: string;
        codePostal: number;
        pays: string;
    }
}

function getUserData(user: User): number
{
    return user.adresse.codePostal

}

const user: User = 
{
    name: 'Bouyagui',
    age: 27,
    email: 'bouyagui@gmail.com',
    adresse: {
        ville: 'Dakar',
        codePostal: 11000,
        pays: 'Senegal'
        }

}

console.log(getUserData(user));




function statusCode(code: string | number)
{
    if(typeof code === 'string'){
        console.log(`My status code is: ${code.toUpperCase()}`);

    }
    else{
        console.log(`My status code is a number: ${code}`);
    }

    
}

statusCode(200);





interface Student
{
    name: string,
    grades: number[]
}


function calculAverage(students: Student[]): {name: string, average:number}[]
{
    return students.map((student) =>{
        const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
        const average = sum / student.grades.length;
        return {
            name: student.name,
            average
        }
    });
}

const students: Student[] = [
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
]

const average =  calculAverage(students)

average.forEach((std) =>{
    console.log(`name: ${std.name},  moyenne: ${std.average}
    `);
    
})




//redux function

function createStore(reducer: (state: number, action: {type: string, payload: number}) => number)
{
    let state = 0;

    const getState = () => state;

    const dispatch = (action: {type: string, payload: number}) => {
        state = reducer(state, action);
    }

    return {
        getState,
        dispatch
    }
}

const reducer = (state: number, action: {type: string, payload: number}) => {
    switch(action.type){
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }


}

const store = createStore(reducer);
store.dispatch({type: 'INCREMENT', payload: 5});
store.dispatch({type: 'DECREMENT', payload: 3});
console.log(store.getState());


//redux function with interface

interface Action{
    type: string;
    payload: number;
}

function createStore2(reducer: (state: number, action: Action) => number)
{
    let state = 0;

    const getState = () => state;

    const dispatch = (action: Action) => {
        state = reducer(state, action);
    }

    return {
        getState,
        dispatch
    }
}

const reducer2 = (state: number, action: Action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
}

const store2 = createStore2(reducer2);
store2.dispatch({type: 'INCREMENT', payload: 5});
store2.dispatch({type: 'DECREMENT', payload: 3});
console.log(store2.getState());



//redux function with interface and generic

interface Action2<T>{
    type: string;
    payload: T;
}

function createStore3<T>(reducer: (state: T, action: Action2<T>) => T)
{
    let state: T;

    const getState = () => state;

    const dispatch = (action: Action2<T>) => {
        state = reducer(state, action);
    }

    return {
        getState,
        dispatch
    }


}

const reducer3 = (state: number, action: Action2<number>) => {
    switch(action.type){
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
}

const store3 = createStore3<number>(reducer3);

store3.dispatch({type: 'INCREMENT', payload: 5});
store3.dispatch({type: 'DECREMENT', payload: 3});
console.log(store3.getState());








