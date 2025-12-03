//1. var — the old way (avoid in modern JS)
// var a=10;    //can be used anywhere inside a function
// console.log(a);
// a=20;        //can be changed
// console.log(a);
// var a=30;    //can be created again by mistake (no error)
// if(true){
//     var a=10;
// }
// console.log(a); //does not stay inside { } blocks

//Why avoid it?
//Because it behaves unpredictably and can cause accidental mistakes.





//2. let — the modern, safe version
// console.log(a);      //cannot be used before you create it
// let a=20;
// console.log(a);
// a=30;
// console.log(a);      //can be changed
// let a=45;            //cannot be redeclared (no multiple let with the same name)
// if(true){
//     let a=20;
// }
// console.log(a);       //stays inside the block { }

//Why is let better?
//Because the variable stays inside its block, so it's clean and predictable.





//3. const — for values that never change
// const pi=3.14;        //a locked variable
// console.log(pi);
// const xi;             //must give a value at the moment you create it
// pi=2;
// console.log(pi);     //cannot be changed later
// if(true){
//     const p=22;
// }
// console.log(p);      //stays inside the block
// const arr = [1, 2, 3];
// arr.push(4);      //allowed (changing inside the array)
// console.log(arr);
// arr[0] = 10;      //allowed
// console.log(arr);
// arr = [5, 6, 7];  // not allowed (assigning a new array)
// console.log(arr);
// const obj = { a: 1 };
// obj.a = 2;   // ✔ allowed
// console.log(obj);





//1. Primitive Data Types

//Numbers
// let a=10;
// let p=2.3;
// let q=Infinity;
// console.log(q);
// console.log(a,p);        

//strings
// let a="Raunak";
// let p='is a good boy.';
// console.log(a,p);

//boolean
// let isempty=true;
// let isfull=false;
// console.log(isempty,isfull);

//undefined
// let p;
// console.log(p);

//null;
// let p=null;
// console.log(p);

//bigint
// let x=1234578963116513405626563278610656683862617n;
// console.log(x);

//symbol
//let id=symbol("id1");


//2. Non-Primitive Type

//Object
// let person={
//     name: "Raunak",
//     age: 20
// };
// console.log(person.name);

//Array
// let arr=[1,3,6,9];
// console.log(arr[3]);

//Function
// function greet(){
//     console.log("Namaste!");
// }
// greet();
// function add(a,b){
//     console.log(a+b);
// }
// add(9,3);






//Primitives → copied by VALUE
// let a = 10;
// let b = a;  // b gets a copy of 10

// b = 20;
// console.log(a); // still 10

//Objects → copied by REFERENCE
// let obj1 = { x: 1 };
// let obj2 = obj1; // both point to same object

// obj2.x = 99;
// console.log(obj1.x); // 99



//typeof operator
// console.log(typeof(3));
// console.log(typeof("hello"));
// console.log(typeof(true));
// console.log(typeof(undefined));
// console.log(typeof(null));
// console.log(typeof([2,4,2]));
// console.log(typeof({}));
// console.log(typeof(function(){}));