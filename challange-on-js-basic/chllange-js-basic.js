// question : create an array  containing differtent types of tea

const teaTypes = ['green tea', 'black tea', 'oolong tea', 'white tea', 'herbal tea'];
// console.log(teaTypes); 





// question : add "chamomile tea " to the existing list of tea types 

// teaTypes.push('chamomile tea');
// console.log(teaTypes);




// questio : remove "oolong tea" from the list of tea types
// const index = teaTypes.indexOf("oolong tea");
// console.log(index);

// if (index > 0){
    // teaTypes.splice(index ,1)      // first method 
// };

// teaTypes.splice(2,2)              // second method
// console.log(teaTypes); 



// problem : filter the list to only include tea that are caffeinated

// const caffeinated = teaTypes.filter((tea)=> tea !== "herbal tea")
// console.log(caffeinated);



// problem  : sort the list of tea in alphabetic order
// teaTypes.sort()
// console.log(teaTypes);



// problem : use a for loop to print each types of tea in array
// for(let i =0 ; i<teaTypes.length; i++) {
//     console.log(teaTypes[i]); 
// }




// problem :  use a for loop to count how many teas are caffeinated (excluding "herbal tea")

// let caffeinatedMyTea =0;
// for (let i=0 ; i< teaTypes.length ; i++){
//     if (teaTypes[i] !== "herbal tea"){
//         caffeinatedMyTea++
//     }
// }
// console.log(caffeinatedMyTea);



//  problem :  use a for loop to create a new array with all teas naem in upper case 
// const upperCaseTea = []
// for ( let i=0 ; i< teaTypes.length ; i++){
//     upperCaseTea.push(teaTypes[i].toUpperCase());
// }
// console.log(upperCaseTea);


// problem : use a for loop to find the tea name with the most charecter 
// let  longestTea = " ";
// for ( let i =0 ; i< teaTypes.length ; i++){
//     if (teaTypes[i].length > longestTea.length ){
//         longestTea = teaTypes[i]
//     }
// }

// console.log(longestTea);




// problem : use a for loop to revrse the order of teas in array
const  reavesedArray = []
for(let i=teaTypes.length -1 ; i > 0 ; i--){
    reavesedArray.push(teaTypes[i]);
}
console.log(reavesedArray);
    

