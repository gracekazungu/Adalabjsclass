//creating an object
let person={
    name:"Ann",
    age:20,
    height:"5Ft",
    friend:{
        name:"Beryl",
        age:25
    }
}

let person1=new Object();
console.log({person1});
person1.name="Edith";//adding a new property
console.log(person1)

person1.age=40;
console.log({person1})
console.log(person.age);//log value

person["age"]=25;//update an existing property
console.log({person});

console.log(person.friend.age);

delete person.age;
console.log({person});
