//  Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString (inputStr){
    let reverseStr = ""

    for(let i=inputStr.length -1; i>=0; i--){
reverseStr += inputStr[i]
    }

    return reverseStr
}


const result = reverseString("Hello World")
// console.log(result)

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

function sumOfPositiveNumber (numbers){
let sum = 0;
for(number of numbers){
    if(number>=0){
        sum+=number
    }

}
return sum;
}

const numberArr =[2, -5, 10, -3, 7]

const result2 = sumOfPositiveNumber(numberArr)
// console.log(result2)

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

function mostFrequencyElement (arr){
let frequencyCount = {}
for(let i= 0; i<arr.length;i++){
    const element = arr[i]
    frequencyCount[element] = (frequencyCount[element] || 0) +1

}

let mostFrequency ;
let maxFrequency =0
for(const element in frequencyCount){
    if(frequencyCount[element]>maxFrequency){
mostFrequency = element
maxFrequency = frequencyCount[element]
    }
}

return mostFrequency
}

const frequencyArr = [3, 5, 2, 5, 3, 3, 1, 4, 5];

const frequencyResult = mostFrequencyElement(frequencyArr)
// console.log(frequencyResult)

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function culculate (num1,num2){
    const sum = num1 + num2;
    const minus = num1 - num2;
    const multiply = num1*num2;
    const divide = (num1/num2).toFixed(2)


    return [sum,minus, divide,multiply]
}

const culculateResult = culculate(50,30)
// console.log(culculateResult)

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numericChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?/[]{},.;:';
  
    const allChars = uppercaseChars + lowercaseChars + numericChars + specialChars;
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    return password;
  }
  
  // Specify the desired length of the password
  const passwordLength = 12;
  
  // Generate the random password
  const randomPassword = generateRandomPassword(passwordLength);
//   console.log(randomPassword);

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(roman) {
    const romanNumeralMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
  
    let result = 0;
    let prevValue = 0;
  
    for (let i = roman.length - 1; i >= 0; i--) {
      const currentSymbol = roman[i];
      const currentValue = romanNumeralMap[currentSymbol];
  
      if (currentValue < prevValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }
  
      prevValue = currentValue;
    }
  
    return result;
  }
  

  console.log(romanToInt("IX")); 
  console.log(romanToInt("XXI")); 
  console.log(romanToInt("IV"));  
  console.log(romanToInt("MCMXCIV")); 

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

  function findSecondSmallest(arr) {
    if (arr.length < 2) {
     console.log("Array should contain at least two elements.");
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      console.log("There is no second smallest element in the array.");
    }
  
    return secondSmallest;
  }
  
  // Test cases
  const array1 = [5, 2, 8, 3, 1];
  console.log(findSecondSmallest(array1)); 
  
  const array2 = [1, 1, 1, 1];
  console.log(findSecondSmallest(array2)); 
  
  const array3 = [10];
  console.log(findSecondSmallest(array3)); 
  




  
  