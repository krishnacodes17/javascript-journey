// console.log("hellow");

// function factory (){
//     console.log("this is our factory function");
    
// }

// factory();


// datatype 

//    string
//    Number
//    boolean
//    null
//    undefine


// let x =5;
// const  y =10;
// let string = "harish";
// let boolean = true;
// // let skills        undefine  because we not give any value but is make space in memory eg: baad me dekhege
// let nullvalue = null;
// let array = ["html" , "css" , "java"]
// let object = {
//     name:"krishna",
//     class:12,
//     skilla:"js ,html,css",
//     favoriteClass:null
// }

// let skills = ["Html" , "css" , "java"]
// let StudentProfile = {
//         name:"krishna",
//         age:20,
//         skills : ['html','css','js'],
//         class : null,
// }

// console.log(StudentProfile);



// let score = 60;

// if (score >= 90){
//     console.log("A");
    
// }else if (score > 80){
//     console.log("B");
    
// }else if(score > 70){
//     console.log("c");
    
// }else if(score => 60){
//     console.log("d");   
// }



// function clculateMarks( marks) {
     
// if (marks >= 90){
//    return console.log("A");
    
// }else if (marks > 80){
//   return  console.log("B");
    
// }else if(marks > 70){
//    return console.log("c");
    
// }else if(marks >= 60){
//    return console.log("d");   
// }
// else {
//    return "fail"
    
// }
// }

//   let result = clculateMarks (25);

//   console.log(result);
  


        //    Array 

// let fruite = ["apple" , "kela", "banana"];
// let fruits = new Array("kiwi" , "avacodo" , "dragon")
// fruite[0] = "bluebarry"

// console.log( fruite[0]);
// console.log(fruite.length);




// loops 

let myarray= [2,5,5,7,5,4,5,4,5,7,5]

// function sunfac (srr){
//         let sum = 0;
//         for (let i =0 ; i< srr.length ;i++){
//            sum = sum + srr[i]
              
//         }
//         return sum;  

// }

// let result = sunfac(myarray );
// console.log(result);



// for(i=0; i< myarray.length + 5 ; i++){
//         console.log(myarray[i]);
// }


// let sum = 0;
// for(let j = 0 ; j < myarray.length ; j++){
//         sum = sum + myarray[j]
//         console.log(sum);
// };

function sumfactoriy (arr){
        let sum =0;
        
      for(i=0; i< arr.length;i++){
        // let sum =0;
         sum = sum +arr [i]
        //  console.log(sum);

      }  
      return sum;
}

// sumfactoriy(myarray);
console.log(sumfactoriy(myarray));



