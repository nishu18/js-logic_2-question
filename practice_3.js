//51

// function fruit(){
//     console.log(name)
//     // console.log(price)

//     var name="apple"// undifine
//     // let price=20// error
// }
// fruit()

//52

// for(var i=0; i<3; i++){
//     setTimeout(()=>console.log(i),i)//333
// }

//53

// for(let i=0; i<3; i++){
//     setTimeout(()=>console.log(i),i)//012
// }

//54

// console.log(+true)//1
// console.log(typeof +true)//number

//56

// console.log(!"anil")//false
// console.log(typeof ("anil"))//string

//57
// let data ="size"
// const bird={
//     size:"small"
// }
// console.log(bird[data])//small
// console.log(bird["size"])//small
// console.log(bird.size)//small
// console.log(bird.data)//undefine

//58

// let c={name:"peter"}
// let d;

// d=c;
// c.name="anil"
// console.log(d.name)//anil

//59

// var x;
// var x=10
// console.log(x)//10

//60
// var x;
// let x=10
// console.log(x)//error

//61

// let a=3;
// let b=new Number(3)
// console.log(a==b)//true
// console.log(a===b)//false

//62
// let name;
// nmae={}
// console.log(name)//undefine

//63

// function fruit(){
//     console.log("wwof")//wwogf
// }
// fruit.name="apple"
// fruit()

//64

// function sum(a,b){
//     return a+b
// }
// console.log(sum(1,"2"))//12

//65
// let number=0;
// console.log(number++)//0
// console.log(++number)//2
// console.log(number)//2

//66
// function getAge(...args){//(... is a spread operator )
//     console.log(typeof args)//object
// }
// getAge(22)

//67

// function getAge(){
//     'use strict'
//     age=20
//     console.log(age)//error
// }
// getAge()

//68

// let sum=eval('10*10+5')
// console.log(sum)//105

//69

//**how  long is cool_secret accessible?
//sessionStorage.setItem('cool_secret', 123);

//70

// const obj={1:"a", 2:"b", 3:"c"};
// console.log(obj.hasOwnProperty("1"))//true
// console.log(obj.hasOwnProperty(1))//true

//71

// const obj={"a":"aa", "b":"bb", "a":"cc"};
// console.log(obj)//{ a: 'cc', b: 'bb' }

//72

// for(let i=0; i<5; i++){
//     if(i===3)continue
//     console.log(i)//01234
// }

//73

// const foo=()=>console.log('first')//1
// const bar=()=>setTimeout(()=>console.log('second'))//3
// const baz=()=>console.log('third')//2

// bar()
// foo()
// baz()

// //74
// <div onclick="console.log('first div)">//1
// <div onclick="console.log('second div)">//2
//  <button onclick="console.log('button')">click</button>//1
    
//     </div>
// </div>

//75

// const person={name:"anil"};

// function sayHi(age){
//     return `${this.name} is${age}`;
// }
// console.log(sayHi.call(person, 21))//anil is 21
// console.log(sayHi.bind(person, 21))//function return