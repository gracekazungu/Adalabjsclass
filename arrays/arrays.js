const items=[2,8,true,"seed",[7,9]];
const a=new Array(2,8,true,"seed");
console.log(items);
console.log(a);


console.log(items[3]);
console.log(items[4][1]);
//end of arrays(add)
items.push(6);
console.log(items);

//add items at the beginning of arrays
items.unshift("fruit");
console.log(items);

//move/delete at the end of arrays
items.pop();
console.log(items);
//move/delete items at the beginning of arrays
items.shift();
console.log(items);

//given an array numbers, return an array X with each number in numbers multiplied by 4
//MAPPING
let num=[1,3,4,6,9,34];
let x =num.map(function(item){
    return item*4  
})
console.log(x);

//FOREACH
let x1=[];
num.forEach(function(item){
x1.push(item*4)
})
console.log(x1);


//merging items
//array concatenation
let mix=items.concat(num);
console.log(mix);

let b= [false,"deny",...num];//spread operator
console.log(b);
//detructing
let [z,w,y]=[1,3,4];
console.log({z});
console.log({w});
console.log({y});

let [r,o,...l]=[1,2,3,4,5,6,8];
console.log({r});
console.log({o});
console.log({l});




