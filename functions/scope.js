let a=20;//global variable.it can be changed within a function(mutable var)

function add(b){
    let c=30;//local variable
    console.log({a})
console.log(a+b+c);
a=60

}
add(20);
console.log("a2",a)

function multiply(c){
    console.log(a*c)
    d=7
}
multiply(3)
console.log(d)//not declared is a global var

function greet(){
    let hello="Hi";
    function talk(){
        let greeting="Hey there";
        console.log(`${hello} ${greeting}`)
    }
    talk();
}
greet()

