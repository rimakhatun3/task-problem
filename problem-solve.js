function reverseString (inputStr){
    let reverseStr = ""

    for(let i=inputStr.length -1; i>=0; i--){
reverseStr += inputStr[i]
    }

    return reverseStr
}


const result = reverseString("Hello World")
// console.log(result)

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

function culculate (num1,num2){
    const sum = num1 + num2;
    const minus = num1 - num2;
    const multiply = num1*num2;
    const divide = (num1/num2).toFixed(2)


    return [sum,minus, divide,multiply]
}

const culculateResult = culculate(50,30)
// console.log(culculateResult)

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
  

//   console.log(romanToInt("IX")); 
//   console.log(romanToInt("XXI")); 
//   console.log(romanToInt("IV"));  
//   console.log(romanToInt("MCMXCIV")); 


  
  