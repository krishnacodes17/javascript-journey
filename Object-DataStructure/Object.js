// const person ={
//     x: 10,
//     y: 20,
//     firstName: " krishna",
//     Hobbies : ["coding , gym , study"],
//     getfullName : ()=>{
//       return "krishna"
//     },
//     Address : {
//       houseNo : 121,
//       socity: "hareRam Socity",
//       state : "mumbai"
//     }
//   }
//   console.log(person.x); 
//   console.log(person.Hobbies);
//   console.log(person.Hobbies);
//   console.log(person.Address.houseNo);
//   console.log(person.getfullName());
  
  
//   // shallow copy & deep copy 
  
//   const person1 = {
//     x: 10,
//     y: 20,
//     firstName: " krishna",
//     Hobbies : ["coding , gym , study"],
//     getfullName : ()=>{
//       return "krishna"
//     },
//     Address : {
//       houseNo : 121,
//       socity: "hareRam Socity",
//       state : "mumbai"
//     }
//   }
  
//   // shallow copy examole 
  
//   const person2 = {
//     ...person1        // this is shallow copy  But Problem is that its not copy nested object its copy nested object referance  
//   }
  
//   console.log(person2);




  
                                  // lets solve some question  

 // problem : crate an object reprenting a type of tea with properties for name , type , and caffeine content

// const tea = {
//   name:"lemon tea",
//   type : "green tea",
//   caffeineContent : "low",
//   "tea type ": "green ",
// }

// // problem :  access and print the name  and type peoperties  of the the tea object. 

// console.log(tea.name);
// console.log(tea.type);
// console.log(tea["type"]);

// // Add a new properties origin to the tea object
 
// tea.origin = "china"
// console.log(tea.origin);


// // change the caffeine level of the tea object to "medium" 
// tea.caffeineContent = " medium"

// console.log(tea);


// // Remove the type property from the tea object 
// delete tea.type ;

// console.log(tea);


// //  check if the tea object has a property origin
// console.log("origin" in tea);



// // use for...in loop to print all properties of tra object 
// for (let key in tea){
//   console.log(key + ":" + tea[key]);
  
// }

// // create a nested object represent different types of tea and their properties 

// const chai = {
//    name : "green tea",
//    type : "green",
//    caffeineContent : "low",
//     origin : "china",
//     properties : {
//       flavor : "herbal", 
//       color : "green",
//       aroma : "fresh"
//     }
// }

// console.log(chai);


// // create a copy of the tea object 
// const copy = {...chai}  // shallow copy


//    // deep copy 
// const objectCopy = JSON.stringify(chai)      // here we convert into string 
// const objcopy = JSON.parse(objectCopy)  

// console.log(objectCopy);
// console.log(objcopy);
// objcopy
// console.log(chai);

// console.log(typeof objectCopy);
// console.log(typeof objcopy);

// objcopy.name = "malali tea"

// console.log(chai.name);
// console.log(objcopy.name);
// console.log(objcopy.properties.color);




//  polyfill : polyfill is a way to add the functionality to the browser. if any browser does not support the functionality then we can use polyfill to add the functionality to the browser. eg : internet explorer does not support the fetch API. so we can use polyfill to add the fetch API to the internet explorer.
// -  lets create a fill name polyfill function which not inside our browser 

const arr = [1,2,3,4]
// if (!array.prototype.fill){
//     array.prototype.fill = { 
//         function fill (value , start , end){
//             for (let i = start; i < end ; i++){
//                 this[i] = value
//             }
//             return this
//     }
// }    

//  example-2 write a ployfill for our .forEach function does not exist on array variable

//  NOTE : before we write any polyfill we first ynderstant its signtaure (sighnature means its functanality like what its take input , what is return , what is its behaviour , what ius output , etc ) signature >> no return , function input , value ,index
// this is its main functanailty of foreach function 

// const ForeachFun = arr.foreach (function(value , index){
//        console.log(`value ata index ${index} is ${value}`)
//        })

// Now create our own myForeach Function

// console.log(arr);

//  if(!Array.prototype.myForEach){
//   Array.prototype.myForEach = function (userFun){
//      const originalArr = this ;  // here this is point to current object which is call
//      for (let i =0 ; i < originalArr.length ; i++){
//         userFun(originalArr[i] , i)
//      }
//   }
//  }


// //   now use our myForEach function 

//  const res = arr.myForEach(function(value , index){
//     console.log(`my for each value at Index ata index ${index} is ${index}`);  
//  }) ;
//  console.log(res);
 

// //  create our MyMap Function  

// // map function signature 
// // signature of map function  >>  return , newarray make , each element iterate , funtion

// if(!Array.prototype.MyMap){
//   Array.prototype.MyMap = function(userFun){
//      const result = []
//      for(let i=0 ; i< this.length ; i++ ){
//          const value = userFun(this[i] , i );
//            result.push(value);
//      }
//      return result;
//   }
//  }

//  const n2 = arr.MyMap((e)=>{
//   return e*3;    
// });

// console.log(n2);
// console.log(arr);




                 // Prototypes     

// object Es6

class person{
   constructor (fname , lname){
   this.fname = fname;    // here this keyword point to p1 
   let  Lastname = lname;
   }
   getfullname(){
     return `${this.fname}`
   }
 }
 
//  const p1 = new person("krishna","gupta")
//  console.log(p1.fname);
//  console.log(p1.Lastname);
//  console.log(p1.getfullname());
 




         // object prototypes practise

 const obj1 = {
  name: "krishna",
  sirname: "fupta",
  getfullname(){
   return`hellow ${this.name}`  
  }
}

const obj2 ={
  name:"harish",
  sirnaem:"goel"
}

// console.log(obj1);
// obj1.getfullname()

// obj2.__proto__= obj1;
// obj2.getfullname();
// console.log(obj2.toString);
// obj1__proto__.__proto__    ;       // here value will be null here hinheitence eill be end 
// obj1__proto__ = null;
// console.log(obj2.toString());


         // see the class __proto 

