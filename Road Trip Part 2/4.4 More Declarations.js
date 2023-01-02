/*4.4 More Declarations
Build a function declaration called maxOf2 that takes in two numbers and returns the greater value. Be careful to think about the possibility of equality as well and return one of the numbers.*/

function maxOf2(num1,num2){
  if(num1 === num2){
    return num1;
  }else if(num1 > num2){
    return num1;
  }else{
    return num2;
  }
}