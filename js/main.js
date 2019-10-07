const inventors = [
    'Albert Einstein',
    'Issac Newton',
    'Galileo Galilei',
    'Marie Curie',
    'Johannes Kepler',
    'Nicolaus Copernicus',
    'Max Planck',
    'Katherine Blodgett',
    'Ada Lovelace',
    'Sarah E. Goode',
    'Lise Meitner',
    'Hanna Hammarstrom'
  ];
  
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
  console.log("numbers", numbers)
//Print out an array of the inventors whose name starts with 'A'
let startWithA = inventors.filter((name) => name.split('')[0] === 'A')
console.log("startWithA", startWithA)
//Print out an array of the inventors whose name contains 'n'

let containN = inventors.filter((name) => {
    return name.split('').includes('n', 'N')
})
console.log("containN", containN)
//Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).

let doubleChars = inventors.filter((name) => {
    const chars = name.split('')
    let isDouble = false
    chars.filter((char, i) =>{
        if(chars[i] === chars[i+1]){
            isDouble = true
        }
    })
    return isDouble
})
console.log("doubleChars", doubleChars)
const hasSameLetterTwiceInARowNames = inventors.filter(name => (name.split('').filter((char, i) => char === name.split('')[i+1]).length > 0))
console.log("hasSameLetterTwiceInARowNames", hasSameLetterTwiceInARowNames)
//Print out an array of the numbers which are odd.

let OddNums = numbers.filter((num) => num%2==1)
console.log("OddNums", OddNums)
//Print out an array of the numbers that have two digits.

let GreaterThan10 = numbers.filter((num) => num >=10)
console.log("GreaterThan10", GreaterThan10)
//Print out an array of the numbers which are prime.

let isPrimeOfNot = numbers.filter((num) =>{
    for(let i =2, s=Math.sqrt(num); i<=s; i++){
        if(num%i===0){return false}
    };
    return num > 1;
});

console.log("isPrimeOfNot", isPrimeOfNot)
/* MAPS BUILD-IN FUNCTION */

//Print out the first name of each inventor

let FirstName = inventors.map((name) => name.split(' ')[0])
console.log("FirstName", FirstName)
//Print out the length of every inventor's full name.

let NameLength = inventors.map((name) => name.length)
console.log("NameLength", NameLength)
//Print out all the inventors' names in uppercase.

let NameUpperCase = inventors.map((name) => name.toUpperCase())
console.log("NameUpperCase", NameUpperCase)
//Print out initials of all inventors(e.g. A.E., I.N., ...)

let NameShorted = inventors.map(name => name.split(" ").map(n => n[0]).join("."))
console.log("NameShorted", NameShorted)
//Print out an array of every number multiplied by 100.

let NumMultipliedBy100 = numbers.map((num) => num*100)
console.log("NumMultipliedBy100", NumMultipliedBy100)
//Print out an array of the powers of two as shown by this array (e.g. 2, 4, 8, 16 ....).

let NumPoweredByTwo = numbers.map((num) => num*num)
console.log("NumPoweredByTwo", NumPoweredByTwo)
/* SORT BUILD-IN FUNCTION */

//Sort all the inventors in alphabetical order, A-Z.

let AZSortedName = inventors.sort()
console.log("AZSortedName", AZSortedName)
//Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.

let ZASortedName = inventors.sort((a, b) => a[0] > b[0] ? -1 : 1)
console.log("ZASortedName", ZASortedName)
//Sort all the inventors by length of name, shortest name first.

let ShortestName = inventors.sort((a, b) => a.length > b.length ? 1 : -1)
console.log("ShortestName", ShortestName)
//Sort all the inventors by length of name, longest name first. Do not use the reverse method.

let LongestName = inventors.sort((a, b) => a.length > b.length ? -1 : 1)
console.log("LongestName", LongestName)

/* REDUCE BUILD-IN FUNCTION */

// Find the sum of all the numbers.

let SumofNums = numbers.reduce((total, num) => total = total+num)
console.log("SumofNums", SumofNums)
//Find the sum of all the even numbers.

let SumofEven = numbers.reduce((total, num) => (num%2===0)? total = total+num : total=total, 0)
console.log("SumofEven", SumofEven)
//Create a string that has the first name of every inventor.

let SumofFirstName = inventors.reduce((total, name) => total = total + name.split(' ')[0], '')
console.log("SumofFirstName", SumofFirstName)
/* SOME, EVERY BUILD-IN FUNCTION */

//Does any inventor have the letter 'y' in their name?

let isPeopleHaveYinTheirName = inventors.some((name) => name.split('').some((char) => char==="y"))
console.log("isPeopleHaveYinTheirName", isPeopleHaveYinTheirName)
//Does every inventor have the letter 'e' in their name?

let isPeopleHaveEinTheirName = inventors.every((name) => name.split('').some((char) => char==="e"))
console.log("isPeopleHaveEinTheirName", isPeopleHaveEinTheirName)
//Does every inventor have first name that's longer than 4 characters?

let isPeopleFirstNameLongerThan4 = inventors.every((name) => name.split(' ')[0].length>4)
console.log("isPeopleFirstNameLongerThan4", isPeopleFirstNameLongerThan4)
/* FIND / FINDINDEX BUILD-IN FUNCTION */

//Find the inventor that has a middle name.

let isPeopleHaveMiddleName = inventors.find(name => name.split(' ').length > 2)
console.log("isPeopleHaveMiddleName", isPeopleHaveMiddleName)
//Bonus: Return a new array without inventor with a middle name.

let PeopleDontHaveMiddleName = inventors.filter(name => name.split(" ").length <=2)
console.log("PeopleDontHaveMiddleName", PeopleDontHaveMiddleName)
