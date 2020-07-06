console.log('Chapter4')

// function greet(name: string) {
//     return 'hello ' + name;
// }
//console.log(greet('test'));
//greet('test', 1)

// type Context = {
//     appId?: string
//     userId?: string
// }
// function log(message:string, context:Context = {}) {
//     let time = new Date().toISOString();
//     console.log(time, message, context.userId);
// }
// log('message');
// var ctx:Context = {
// }
// console.log(ctx.userId);

// function sum(numbers: number[]) : number {
//     return numbers.reduce((total, n) => total + n, 0);
// }
// let val = sum([1,2,3])
// console.log(val);

// function sumVariadic(...numbers:any):number {
//     return Array
//         .from(arguments)
//         .reduce((total, n) => total + n, 0);
// }
// console.log(sumVariadic(1,2,3));

// function sumVariadic(...numbers:number[]):number {
//     return numbers.reduce((total, n) => total + n, 0);
// }
// console.log(sumVariadic(1,2,3));

// function add(a:number, b:number) : number {
//     return a + b;
// }
// console.log(add(10,20));
// console.log(add.apply(null, [10, 20]));
// console.log(add.call(null, 10, 20));
// console.log(add.bind(null, 10, 20)());

// function fancyDate(this: Date) {
//     return this.getDate() / this.getMonth() / this.getFullYear()
// }
// //fancyDate(new Date());
// console.log( fancyDate.call(new Date()) );

// function* createFibonacciGenerator() {
//     let a=0
//     let b=1
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }

// let fn = createFibonacciGenerator();
// console.log( fn.next() );
// console.log( fn.next() );
// console.log( fn.next() );
// console.log( fn.next() );
// console.log( fn.next() );

// // 4.1.7
// function area(radius:number) : number | null{
//     if (radius < 0) {
//         return null;
//     }
//     return Math.PI * radius * 2;
// }

// type Log = (message:string, userId?:string) => void
// let log:Log = (
//     message,
//     userId = 'not signed'
// ) => {
//     let time = new Date().toISOString()
//     console.log(time, message, userId)
// }
// log('test')

// function times( 
//     f: (index: number) => void,
//     n: number
// ) {
//     for (let i=0; i < n; i++) {
//         f(i)
//     }
// }
// times(console.log, 10)

// function f(n:any) {
//     console.log(n)
// }
// f('str')

// 4.2
// // ex1
// type Filter = {
//     (array:number[], f:(item:number)=>boolean) : number[]
// }
// let filter : Filter = (array, f) => {
//     let result = []
//     for (let i=0; i < array.length; ++i) {
//         let item = array[i]
//         if (f(item)) {
//             result.push(item)
//         }
//     }
//     return result
// }
// let a = filter([1,2,3,4], (a) => a < 3);
// console.log(a);

// // ex2
// type Filter = {
//     <T>(array:T[], f:(item:T)=>boolean) : T[]
// }
// let filter : Filter = (array, f) => {
//     let result = []
//     for (let i=0; i < array.length; ++i) {
//         let item = array[i]
//         if (f(item)) {
//             result.push(item)
//         }
//     }
//     return result
// }
// let a = filter([1,2,3,4], (a) => a < 3);
// console.log(a);
// let names = [
//     {firstName: 'beth'},
//     {firstName: 'caitlyn'},
//     {firstName: 'xin'},
// ]
// let b = filter(names, a => a.firstName.startsWith('b'))
// console.log(b);

// // ex3
// function filter<T> (
//     array:T[],
//     f:(item:T)=>boolean
// ) : T[] {
//     let result = []
//     for (let i=0; i < array.length; ++i) {
//         let item = array[i]
//         if (f(item)) {
//             result.push(item)
//         }
//     }
//     return result
// }
// let a = filter([1,2,3,4], (a) => a < 3);
// console.log(a);
// let names = [
//     {firstName: 'beth'},
//     {firstName: 'caitlyn'},
//     {firstName: 'xin'},
// ]
// let b = filter(names, a => a.firstName.startsWith('b'))
// console.log(b);

// function map<T, U> (
//     array: T[],
//     f: (item:T) => U,)
//     : U[] {
//     let result:U[] = []
//     for (let i=0; i < array.length; ++i) {
//         result[i] = f(array[i])
//     }
//     return result;
// }
// console.log(map([1,2,3,4], a => a * 10))
// console.log(map<number, number>([1,2,3,4], a => a * 10))

// class A {
//     constructor() {}
//     str():string {
//         return 'A';
//     }
// }
// class B extends A {
//     str():string {
//         return 'B';
//     }
// }
// class C {
//     public a:number = 0;
//     str():string {
//         return 'C';
//     }
// }

// function node<T extends A> (
//     node: T
// ) : string {
//     return node.str()
// }
// console.log(node<A>(new A()));
// console.log(node<B>(new B()));
// console.log(node<C>(new C()));

// type TreeNode = {
//     value:string
// }
// type LeafNode = TreeNode & {
//     isLeaf:true
// }
// type InnerNode = TreeNode & {
//     children: [TreeNode] | [TreeNode, TreeNode]
// }
// let a:TreeNode = {value:'a'}
// let b:LeafNode = {value:'b', isLeaf:true}
// let c:InnerNode = {value:'c', children:[b]}
// function mapNode<T extends TreeNode> (
//     node: T,
//     f: (value:string) => string
// ) : T {
//     return {
//         ...node,
//         value:f(node.value)
//     }
// }
// let a1 = mapNode(a, a=>a.toUpperCase());
// let b1 = mapNode(b, a=>a.toUpperCase());
// let c1 = mapNode(c, a=>a.toUpperCase());
// let d1 = mapNode({v:'ss'}, a=>a.toUpperCase());
// console.log(a1);
// console.log(b1);
// console.log(c1);
// console.log(d1);


function call<T extends unknown[], R> (
    f: (...args:T) => R,
    ...args: T
): R {
    return f(...args)
}
function fill(length:number, value:string) : string[] {
    return Array.from({length}, () => value)
}
console.log( call(fill, 10, 'a') );

