// 1. Write a function calculateFactorial (n) that takes a non-negative integer n and returns the factorial of n.(factorial of 5= 5*4*3*2*1=120)

function calculateFactorial(n){

    let factorial = 1;

    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    
    return factorial;
  }

  console.log(calculateFactorial(5));

// 2. Write a function isPrime(num) that takes a positive integer num and returns true if the number is prime, and false otherwise  

function isPrime (num){
    if (num <= 1){
        return false;
    }

    for (let i = 2; i <num; i++){
        if (num % i === 0)
            return false
    }
    return true;
}
console.log(isPrime(4)); 
console.log(isPrime(5));

// 3. Write a function sumEvenNumbers(start, end) that takes two integers start and end, and returns the sum of all even numbers in the inclusive range from start to end.
  
function sumEvenNumbers(start,end){
    let sum =0

    for (let i = start; i <= end; i++)
        if ( i%2 ===0){
            sum += i
        }
        return sum

}
console.log(sumEvenNumbers(1,10))
// 4. Write a JavaScript program to remove items(clicking on a button) from a drop-down list.
 
document.getElementById('btn').addEventListener('click',funcion1)

function funcion1(){
    const parent = document.getElementById('colorSelect')
    const target = parent.lastElementChild
    parent.removeChild(target)
}


// 5. Write a JavaScript program to change the  color given text in p tag 

function changeTextColor() {
    const colorSelect = document.getElementById("colorSelect2");
    const selectedColor = colorSelect2.value;
    const sampleText = document.getElementById("sampleText");
    sampleText.style.color = selectedColor;
}

// 6. Write a JavaScript function to get the values of First and Last names of the following form