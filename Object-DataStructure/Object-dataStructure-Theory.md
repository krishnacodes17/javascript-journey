### Object and data structure means how we represent the data in the computer memory. its may be in the form of array, linked list, tree, graph etc.

### Data structre manily two types: 
- Primitive data structure: 
    - boolean , let 
 -  Non-primitive data structure:
    - array,object, Linked list, Stack, Queue, Tree, Graph etc.

### Array  => array is a collection of similar data types. its store in contiguous memory location. its size is fixed. we can access the element by index. its store vale in [] square bracket. 
    - Example: 
        - let arr = [1,2,3,4,5]  // array of numbers
        - let arr = ['a','b','c'] // array of string
        - let arr = [1,'a',true] // array of mixed data types


### Object => object is data structure. object is a collection of key-value pairs. its store in non-contiguous memory location. its size is dynamic. we can access the element by key. its store value in {} curly bracket.
    - Example: 
        - let obj = {name: 'John', age: 30, city: 'New York'} // object of string
        - let obj = {name: 'John', age: 30, isMarried: true} // object of mixed data types
        - let obj = {1: 'a', 2: 'b', 3: 'c'} // object of numbers as key and string as value

- ### object is help to group the data in a single unit.
    -  we have two world  1st  real world and 2nd coding world 
        - coding world is help to represent the real world in the computer memory.
        - real world design by coding world.
        eg : we have a remote  which is real world example and in coding world we can represent the remoote like object 
        const remote = {
            name: 'remote',
            color: 'black',
            size: 'small',
            button: 10,
            battery: 'AA'
            company: ['LG', 'Samsung', 'Sony'],
            dimansion: {
                length: 10,
                width: 5,
                height: 2
            },
        }

### Memory  => Memory is a place where we store the data. its mainly two types memory: 
-  Stack memory: 
    -  Stack memory is a temporary memory where we store the data for a short period of time. its store the data in LIFO (last in first out) order. its store the data in call stack. 
     - stack have a limit. when stack is full then it will give an error called stack overflow. means its canot grow.

- Heap memory: 
    - Heap memory is a permanent memory where we store the data for a long period of time. its store the data in random order. its store the data in heap. 
    - heap have no limit. its can grow as much as we want.

#### Problem  suppose we have a data its we can keep in stack  so in feature may be data will be increase that time problem we cant keep in stack aor if we keep data in heap that time problem is that our compailer where found data heap aur stack that proccess is time consuming because first stack check than go to heap memory 

#### solution  : here we use a hybride we can store object , array address in stack means we can use referance here hrap to stack 

 #### different between stack and heap memory:
        - stack memory search is fast because its first check  where heap memory is slow because its first check stack then heap memory.
        - we can store primative data types in stack memory and non-primitive data types in heap memory.
           - let , const , var are stored in stack memory and object, array are stored in heap memory.

### grabage collection: 
    -  garbage collection is a process of removing the unused data from the memory. its help to free up the memory. its automatically done by the javascript engine. 
    -  garbage collection is done by two methods: 
        -  reference counting: its count the number of references of the data. if the reference is 0 then it will remove the data from the memory.
        -  mark and sweep: its mark the data as used and then remove the unused data from the memory.

#### Memory leak 

### How to copy a Object  
    - let person1 {
        p-Name : "krishna",
        p-age : 25,
        p-Address : "pune",
        area: {
            city: "pune",
            state: "maharashtra",
            country: "india"
        }

    }

    let person2 =person1 ;  // in this exapmple we copy referance means if i chanage person2 any value its reflect on person1 also 
        -  so here we can do 
         let person2 ={
            person1.name,
            person1.age,
            person1.address,
         }

         but problem is that if we have large object then its not good way to copy the object.

            -  so we can use spread operator to copy the object.
            -  let person2 ={
                ...person1
            } 

            - but problem is alos that if we have nested object then its copy nested object referance.  its is shallow copy.

### deep copy of object: 
    -  deep copy is a process of copying the object and its nested object. its create a new object in the memory. its not referance. 
    -  we can use JSON.parse(JSON.stringify(object)) to deep copy the object.
    - eg  :  const person1KaString = JSON.stringify(person1) ;
      const person2 = JSON.parse(person1KaString) ;




### prototype: 
    -  prototype is a property of the object. its help to access the property of the object. 
    - prototype is a way to add the property and method to the object.
    - we can use prototype  _prototype_
    eg : 
        -  function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.greet = function() {
            console.log('Hello, my name is ' + this.name);
        }
        const person1 = new Person('John', 30);
        person1.greet(); // Hello, my name is John

### polyfill : polyfill is a way to add the functionality to the browser. if any browser does not support the functionality then we can use polyfill to add the functionality to the browser. eg : internet explorer does not support the fetch API. so we can use polyfill to add the fetch API to the internet explorer.
    -  lets create a fill name polyfill function which not inside our browser 
    const arr = [1,2,3,4]
    if (!array.prototype.fill){
        array.prototype.fill = {

        }
    }    

- example-2  write a ployfill for our .forEach function does not exist on array variable

  - NOTE : before we write any polyfill we first ynderstant its signtaure (sighnature means its functanality like what its take input , what is return , what is its behaviour , what ius output , etc )   signature >> no return , function input , value ,index

- this is its main functanailty of foreach function
  - const ForeachFun = arr.foreach (function(value , index){
    console.log(`value ata index ${index} is ${value}`)
  })

- Now create our own myForeach Function 
    - if 
console.log(arr);

      if(!Array.prototype.myForEach){ 
       Array.prototype.myForEach = function (userFun){
          const originalArr = this ;  // here this is point to      current object which is call
          for (let i =0 ; i < originalArr.length ; i++){
             userFun(originalArr[i] , i)
          }
       }
      }


//   now use our myForEach function 

 const res = arr.myForEach(function(value , index){
    console.log(`my for each value at Index ata index ${index} is ${index}`);  
 }) ;
 console.log(res);
 

-  create our MyMap Function  

- map function signature 

- signature of map function  >>  return , newarray make , each element iterate , funtion

         if(!Array.prototype.MyMap){
        Array.prototype.MyMap = function(userFun){
           const result = []
           for(let i=0 ; i< this.length ; i++ ){
               const value = userFun(this[i] , i );
                 result.push(value);
           }
           return result;
         }
        }

       const n2 = arr.MyMap((e)=>{
        return e*3;    
      });
      
      console.log(n2);
      console.log(arr);




## Prototypes 

   #### object 
   - object is a real world entities  inside object we see some properties some method 
     - properties means  >> colour , weight
     - method means   >> action , function
   - different betwwen method and function 
     - if we create a function inside our object that time is called method 
     - if we create a single function that is called function 
- disadvantage of object >> when we create a object and want to create a another object and i want to only scema of 1st object but can't do that and also a problem is that if we create a object that time we store value in key-pair but what we do if key-value pair is more that time we cant copy that one by one so this problem solving we introduce es5 class 

### Es6
   here we create a class and inside we describe our schema and we create many object using that schema just using New key-word

       syntex : class person (){
         ...schema
       }

       const person1 = new person()
       const person2 = new Person()

- let create a class 

      class person{
                constructor (fname , lname){
                this.fname = fname;
                let  Lastname = lname;
            }
                getfullname(){
                   return `${this.fname}`
                }
        }

        const p1 = new person("krishna","gupta")
        console.log(p1.fname);
        console.log(p1.Lastname);
        console.log(p1.getfullname());

 #### constructor 
- mainly two types of constructor 
  - default constructor  >> which is create automatically when we not create any constructor
  - permiterised constructor   >> where we take any arugument as a permeter

#### Prototype 
 - prototypes going inside when its prototypes value not null

  - when we check class prototypes that time we use prototype
  - when we check object prototype thaat time we use __proto__   

 