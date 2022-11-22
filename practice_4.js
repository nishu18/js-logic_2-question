//76
// function sayHi(){
//     return(()=>0)();
// }
// console.log(typeof sayHi())//number

//77
// function sayHi(){
//     return ()=>0;
// }
// console.log(typeof sayHi())//function

//78
// console.log(typeof typeof 1)//string

//79

// const number=[1,2,3]
// number[6]=11;
// console.log(number)//[ 1, 2, 3, <3 empty items>, 11 ]

//80
// const number=[1,2,3]
// number[9]=number;
// console.log(number)//<ref *1> [ 1, 2, 3, <6 empty items>, [Circular *1] ]

//81
//everything in javascript is either a primitive or object

//82

// console.log(!!null)//false
// console.log(!!"")//false
// console.log(!!1)//true

//83
// console.log(setInterval(()=>console.log('hi'),1000))
// console.log(setInterval(()=>console.log('hi'),1000))
// console.log(setInterval(()=>console.log('hi'),1000))

//84

// console.log([..."anil"])//[ 'a', 'n', 'i', 'l' ]

//85

// const first=new Promise((res, rej)=>{
//     setTimeout(res, 500, 'one')
// })
// const second=new Promise((res, rej)=>{
//     setTimeout(res, 100, 'seconde')
// })
// Promise.race([first, second]).then(res=>console.log(res))//second

//86

// let person={name:"peter"}
// const number=[person]
// person=null
// console.log(number)//[ { name: 'peter' } ]

//87
// const person={
//     name:"batsman",
//     age:21
// }
// for(const item in person)
// {console.log(item)}// name age

//88
// let data =3+4+'5'
// console.log(typeof data)//string

//89
// console.log(typeof 3+4+'5')//number45

//90
// console.log(typeof (3 + 4 + + '5'))//number

// //91
// console.log([]==[])//false

//92
// let data=[1,2,3].map(num=>{
//     if(typeof num =='number')return;
//     return num*2
// })
// console.log(data)//[ undefined, undefined, undefined ]

//93

// function getInfo(member){
//     member.name='anil'

// }
// const person={name:"sarah"}
// getInfo(person)
// console.log(person)//anil

//94

// function Car() {
//     this.make='tata'
//     return {make:'kia'}
// }
// const myCar= new Car();
// console.log(myCar.make)//kia

//95

// (()=>{
//     let x =(y=10);
// })();
// console.log(typeof x)//undefined

//96
// (()=>{
//     let x =y=10;
// })();
// console.log(typeof y)//number

//97
// (()=>{
//     let x =10;
// })();
// (()=>{
//     let x =10;
// })();
// console.log(typeof x)//undefined

//98
// (()=>{
//     let x =y=10;
// })();
// (()=>{
//     let x =y=20;
// })();
// console.log( y)//20

//99
// let x=10;
// (()=>{
//     var x=20
// })();
// console.log(x)//10

//100
console.log(!true - true)//-1

//101
console.log(true + +"10")//11