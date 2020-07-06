console.log('chapter 3')

// 3.
// function squareOf(n:number) {
//     return n*n;
// }
// var s = squareOf(2);
// //squareOf('2');
// console.log(s);

// 3.2.1
// let a: any = 666;
// let b: any = ['danger'];
// let c = a + b;

// 3.2.2.
// let a: unknown = 10
// let b = a === 123
// //let c = a + 10
// if (typeof a === 'number') {
//     let d = a + 10
//     console.log('a === number')
// }

// 3.2.3
// let a = true;
// var b = false;
// const c = true;
// let d: boolean = true;
// let e: true = true;
// //let f: true = false;

// 3.2.4
// let a = 1234;
// var b = Infinity * 0.10;
// const c = 5678;
// let d = a < b;
// let e: number = 100;
// let f: 26.123 = 26.123;
// //let g: 26.123 = 26.12;

//let on_mill = 1_000_000;

// 3.2.5
// let a = 1234n;
// const b = 5678n;
//console.log(b);

// 3.2.6
//let a = 'hello';

// 3.2.7
// let a = Symbol('a');
// let b: symbol = Symbol('b');
// var c = a === b;
// console.log(c);

// 3.2.8
// let a: object = {
//     b: 'x'
// };
// a.b;

// let a = {
//     b:'x'
// };
// console.log(a.b);

// let b = {
//     c: {
//         d: 'f'
//     }
// };

// let c: {
//     firstName:string,
//     lastName:string
// } = {
//     firstName: 'john',
//     lastName: 'barrownman'
// };

// class Person {
//     constructor(
//         public firstName: string,
//         public lastName: string
//     ) {}
// }
// c = new Person('matt', 'smith');

// let a: {b:number}
// a = {};

// let i:number
// let j = i * 3

// let a: {
//     b: number
//     c?: string
//     [key:number]:boolean
// }

// a = {b:1}
// a = {b:1, c:undefined}
// a = {b:1, c:'d'}
// a = {b:1, 10:true}
// a[11] = false;
// console.log(a[10]);
// console.log(a[11]);

// let user: {
//     readonly firstName: string
// } = {
//     firstName: 'test'
// }

// let danger = {
//     x:1
// }
// console.log(danger.x)

// type Age = number
// type Person = {
//     name: string
//     age: Age
// }

// let age: Age = 55
// let driver: Person = {
//     name: 'james',
//     age: age
// }

// type Color = 'red';
// //type Color = 'blue';

// let x = Math.random() < .5
// if (x) {
//     type Color = 'blue'
//     let b:Color = 'blue'
// } else {
//     let c: Color = 'red'
// }

// type Cat = {name:string, purrs: boolean}
// type Dog = {name:string, barks: boolean}
// type CatOrDog = Cat | Dog;

// let a: CatOrDog = {
//     name: 'bonkers',
//     purrs: true
// }

// type Returns = string | null;
// function fnname(a: string, b: number) {
//     return a || b;
// }

// 3.2.10
// let a = [1, 2, 3]
// var b = ['a', 'b']
// let c: string[] = ['a'];
// let d = [1, 'a']

// let f = ['red']
// f.push('blue')
// f.push(1)

// let g = []
// g.push(1);
// g.push('blue')

// let d = [1, 'a']
// let a = d.map(a => {
//     if (typeof a === 'number') {
//         return a * 3;
//     }
//     return a.toUpperCase()
// })

// 3.2.11
//let a:[number] = [1]

// let b: [string, string, number] = ['malcolm', 'gladwell', 1111]
// //b = ['queen', 'eliza', 'ii', 11]
// console.log(b[0]);
// console.log(b[1]);
// console.log(b[2]);

// function e() {
//     while (true) {        
//     }
// }

enum Language {
    En = 0,
    Sp = 1,
    Rus = 2,
}
console.log(Language[1])
console.log(Language[3])
console.log(Language.Rus);

