console.log('Chapter5')

// 5.1
// type Color = 'Black' | 'White'
// type File2 = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
// type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
// class Position {
//     constructor(
//         private file: File2,
//         private rank: Rank
//     ) {}
//     distanceFrom(position: Position) {
//         return {
//             rank: Math.abs(position.rank - this.rank),
//             file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
//         }
//     }
// }
// abstract class Piece {
//     protected position: Position
//     constructor(
//         private readonly color: Color,
//         file: File2,
//         rank: Rank
//     ) {
//         this.position = new Position(file, rank)
//     }
//     moveTo(position: Position) {
//         this.position = position
//     }
//     abstract canMoveTo(position: Position):boolean
// }
// //let a = new Piece('Black', 'A', 1)
// class King extends Piece {
//     canMoveTo(position: Position) {
//         let distance = this.position.distanceFrom(position)
//         return distance.rank < 2 && distance.file < 2
//     }
// }
// class Game {
//     private pieces = Game.makePieces()
//     private static makePieces() {
//         return [
//             new King('White', 'E', 1),
//         ]
//     }
// }

// 5.3
// class Set2 {
//     delete() : this {
//         return this;
//     }
// }
// class MutualSet2 extends Set2 {
// }
// let a = new MutualSet2()
// let b = a.delete();

// 5.4
// interface A {
//     good(x:number):string
//     bad(x:number):string
// }
// interface B extends A {
//     good(x:string | number): string
//     bad(x:string) : string
// }
// type A = {
//     good(x:number):string
//     bad(x:number):string
// }
// type B = A & {
//     good(x:string | number): string
//     bad(x:string) : string
// }
