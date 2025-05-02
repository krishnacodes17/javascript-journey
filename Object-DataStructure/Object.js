const person ={
    x: 10,
    y: 20,
    firstName: " krishna",
    Hobbies : ["coding , gym , study"],
    getfullName : ()=>{
      return "krishna"
    },
    Address : {
      houseNo : 121,
      socity: "hareRam Socity",
      state : "mumbai"
    }
  }
  console.log(person.x); 
  console.log(person.Hobbies);
  console.log(person.Hobbies.);
  console.log(person.Address.houseNo);
  console.log(person.getfullName());
  
  
  // shallow copy & deep copy 
  
  const person1 = {
    x: 10,
    y: 20,
    firstName: " krishna",
    Hobbies : ["coding , gym , study"],
    getfullName : ()=>{
      return "krishna"
    },
    Address : {
      houseNo : 121,
      socity: "hareRam Socity",
      state : "mumbai"
    }
  }
  
  // shallow copy examole 
  
  const person2 = {
    ...person1        // this is shallow copy  But Problem is that its not copy nested object its copy nested object referance  
  }
  
  console.log(person2);