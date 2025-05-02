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





    