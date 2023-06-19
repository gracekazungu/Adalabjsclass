let success=true;
let promise=new Promise(function(resolve,reject){
    if(success){
        resolve("I have everything");
    }else{
        reject("I am still poor");
    }
})
.then(()=>{console.log("it is a dream come true");})
.catch(()=>{console.log("i will have my own money");})
.finally(()=>{console.log("i will be happy");});
console.log({promise})

