
function add(num,callback){
    // console.log(num);
    // console.log({callback});
    callback(num);
}
function nums(num){
    console.log(num+30);
}
add(5,nums)


function sumAsync(num1, num2, num3, callback) {
    setTimeout(function() {
      const sum = num1 + num2 + num3;
      callback(sum);
    },0);
  }
  function handleSum(sum) {
    console.log('The sum is:', sum+30);
  }
  
  sumAsync(2, 4, 6, handleSum);


  function summOf(num1,num2,num3,callback){
    const add=num1+num2+num3;
    callback(add)
  }
  function result(add){
    console.log(add+56)
  }
  summOf(30,2,7,result);
 