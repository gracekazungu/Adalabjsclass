let person={
    name:"Ann",
    age:25,
    introduce:function(){
        console.log("Hello")
        console.log(`Hello my name is ${this.name} and am ${person.age} years`)
    }

}
person.introduce()
// console.log({person})

person.greet=function(){
    console.log("How are you doing")
    console.log(`Hello my name is ${this.name}`)
}
person.greet()