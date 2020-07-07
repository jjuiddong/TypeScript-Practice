console.log('Chapter6')

// 6.1
// function deleteUser(user: {id?:number, name:string}) {
//     delete user.id
// }
// type LegacyUser = {
//     id?: number | string
//     name: string
// }
// let legacyUser: LegacyUser = {
//     id: '1111',
//     name: 'xin yang'
// }
// deleteUser(legacyUser)

// type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
// type Day = Weekday | 'Sat' | 'Sun'
// function getNextDay(w:Weekday) : Day {
//     switch(w) {
//         case 'Mon': return 'Tue'
//     }
// }

// 6.3.1
// type APIResponse = {
//     user: {
//         userId: string
//         friendList: {
//             count: number
//             friends: {
//                 firstName: string
//                 lastName: string
//             }[]
//         }
//     }
// }
// type FriendList = APIResponse['user']['friendList']
// function renderFriendList(friendList : FriendList) {    
// }
// type ResponseKeys = keyof APIResponse
// type UserKeys = keyof APIResponse['user']
// type FriendListKeys = keyof APIResponse['user']['friendList']
// function get<
//     Obj extends object,
//     Key extends keyof Obj
//     > (
//         obj:Obj,
//         key:Key
//     ) {
//         return obj[key]
//     }
// type ActivityLog = {
//     lastEvent: Date
//     events: {
//         id: string
//         timestamp: Date
//         type: 'Read' | 'Write'
//     }[]
// }
// let log : ActivityLog = {
//     lastEvent: new Date(),
//     events: [
//         {
//             id: 'test',
//             timestamp: new Date(),
//             type: 'Read',
//         }
//     ]
// }
// let lastEvent = get(log, 'lastEvent')
// let lastEvent2 = get(log, 'lastEvent2')

// 6.3.2
// type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
// type Day = Weekday | 'Sat' | 'Sun'
// let nextDay: Record<Weekday, Day> = {
//     'Mon': 'Tue',
//     Tue: 'Wed',
//     Wed: 'Thu',
//     Thu: 'Fri',
//     Fri: 'Sat',
// }
// let a = nextDay['Tue'];
// console.log(a);

// 6.3.3
// type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
// type Day = Weekday | 'Sat' | 'Sun'
// let nextDay : {[K in Weekday]: Day} = {
//     Mon : 'Tue',
//     Tue : 'Wed',
// }

// type Account2 = {
//     id: number
//     isEmployee: boolean
//     notes: string[]
// }
// type OptionalAccount2 = {
//     [K in keyof Account2]? : Account2[K]
// }
// let account : Account2 = {
//     id: 1,
//     isEmployee: true,
//     notes : ['test1', 'test2']
// }
// console.log(account['id']);
// console.log(account.id);
// let account2 : OptionalAccount2 = {
//     isEmployee: false
// }
// console.log(account2.isEmployee);


// 6.4
// let a = [1, true, 'str', 1, false]
// function tuple<T extends unknown[]>(
//     ...ts: T
// ) : T {
//     return ts
// }
// let b = tuple(1, true, 'str', 1, false)

// 6.7
// type CompanyID = string
// type OrderID = string
// type UserID = string
// type ID = CompanyID | OrderID | UserID
// function queryForUser(id: UserID) {
//     console.log(id)
// }
// let id: CompanyID = 'test'
// queryForUser(id);

type CompanyID = string & {readonly brand: unique symbol}
type OrderID = string & {readonly brand: unique symbol}
type UserID = string & {readonly brand: unique symbol}
type ID = CompanyID | OrderID | UserID
function queryForUser(id: UserID) {
    console.log(id)
}
let id1: CompanyID = 'test1' as CompanyID
let id2: UserID = 'test2' as UserID
//queryForUser(id1);
queryForUser(id2);
