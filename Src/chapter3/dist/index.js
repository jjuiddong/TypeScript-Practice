"use strict";
console.log('chapter 3');
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
let a = Symbol('a');
let b = Symbol('b');
var c = a === b;
console.log(c);
