let userDatails=true;

let promise=new Promise(function(resolve,reject){
    if(userDatails){
        setTimeout(()=>{resolve("User details available")},5000);
    }else{
        setTimeout(()=>{reject("No user datails available")},5000);
    }
});

let add=()=>{
    console.log(20+30)
}
add();

const getUserDetails=async()=>{
    let response=await promise;
    console.log({response});
}
getUserDetails();