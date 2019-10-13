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

/////OPTIONAL JS

const people = [
    {
      id: 1,
      firstName: "Loi",
      lastName: "Tran",
      age: 13,
      favoriteColors: ["red", "white", "blue"],
      favoriteSingers: ["Mariah Carey", "Justin Bieber", "Britney Spears"],
      nationality: "USA",
      gender: "m",
      zodiac: "Cancer",
      jobTitle: "Instructor",
      company: "CoderSchool",
      friendsCount: 5000,
      followers: 4000,
      height: "160mm",
      weight: "70kg"
    },
    {
      id: 2,
      firstName: "Quyen",
      lastName: "Thai",
      age: 23,
      favoriteColors: ["bronze", "white", "green"],
      favoriteSingers: ["Son Tung", "Minh", "Anh", "Taeyoung"],
      nationality: "VN",
      gender: "f",
      zodiac: "Taurus",
      jobTitle: "Student",
      company: "Grab",
      friendsCount: 1500,
      followers: 100,
      height: "160mm",
      weight: "50kg"
    },
    {
      id: 3,
      firstName: "Shawn",
      lastName: "Talvacchia",
      age: 32,
      favoriteColors: ["teal", "white", "torquise"],
      favoriteSingers: ["Romare", "Mount Kimbie", "Nicholas Jaar"],
      nationality: "USA",
      gender: "m",
      zodiac: "Cancer",
      jobTitle: "Student",
      company: "Facebook",
      friendsCount: 500,
      followers: 900,
      height: "180mm",
      weight: "70kg"
    },
    {
      id: 4,
      firstName: "Phuong",
      lastName: "Tran",
      age: 27,
      favoriteColors: ["blue", "pink", "green"],
      favoriteSingers: ["Chris Young", "Bruno Mars", "Taylor Swift"],
      nationality: "VN",
      gender: "f",
      zodiac: "Leo",
      jobTitle: "Student",
      company: "Google",
      friendsCount: 900,
      followers: 100,
      height: "155mm",
      weight: "65kg"
    },
    {
      id: 5,
      firstName: "Mai",
      lastName: "Hoang",
      age: 29,
      favoriteColors: ["red", "white", "black"],
      favoriteSingers: ["2pac", "Sia", "Johan Sebastian Von Bach"],
      nationality: "SE",
      gender: "f",
      zodiac: "Pisces",
      jobTitle: "Student",
      company: "Spotify",
      friendsCount: 1500,
      followers: 400,
      height: "140mm",
      weight: "87kg"
    },
    {
      id: 6,
      firstName: "Khuong",
      lastName: "Huynh",
      age: 18,
      favoriteColors: ["red", "green", "blue"],
      favoriteSingers: ["Adele", "Celine Dion", "Tuan Ngoc"],
      nationality: "vn",
      gender: "m",
      zodiac: "aries",
      jobTitle: "Student",
      company: "Amazon",
      friendsCount: 1505,
      followers: 10,
      height: "161mm",
      weight: "74kg"
    },
    {
      id: 7,
      firstName: "Thien",
      lastName: "Hoang",
      age: 28,
      favoriteColors: ["red", "white", "blue"],
      favoriteSingers: ["Adele", "Nat King Cole", "Westlife"],
      nationality: "VN",
      gender: "m",
      zodiac: "Aries",
      jobTitle: "Student",
      company: "Vingroup",
      friendsCount: 999,
      followers: 540,
      height: "148mm",
      weight: "54kg"
    },
    {
      id: 8,
      firstName: "Hang",
      lastName: "Tran",
      age: 29,
      favoriteColors: ["gray", "navy", "maroon"],
      favoriteSingers: ["Maroon5", "Linkin Park", "Eminem"],
      nationality: "vn",
      gender: "m",
      zodiac: "Sagittarius",
      jobTitle: "Student",
      company: "Go Viet",
      friendsCount: 500,
      followers: 300,
      height: "143mm",
      weight: "89kg"
    },
    {
      id: 9,
      firstName: "Parsa",
      lastName: "Taheri",
      age: 19,
      favoriteColors: ["Green", "Blue", "Yellow"],
      favoriteSingers: ["Shawn Mendes", "Lana Del Rey", "Eminem"],
      nationality: "UK",
      gender: "M",
      zodiac: "capricorn",
      jobTitle: "Student",
      company: "Vodafone",
      friendsCount: 2200,
      followers: 100,
      height: "173mm",
      weight: "62kg"
    },
    {
      id: 10,
      firstName: "Charles",
      lastName: "Lee",
      age: 26,
      favoriteColors: [
        "red",
        "white",
        "amber",
        "peach",
        "vanilla",
        "chocolate",
        "charcoal gray",
        "Big Apple Red",
        "Bubble Bath",
        "Kiss me on the Tulips"
      ],
      favoriteSingers: ["Kanye West"],
      nationality: "USA",
      gender: "m",
      zodiac: "Cancer",
      jobTitle: "Chief Executive Officer",
      company: "CoderSchool",
      friendsCount: 2121,
      followers: 212,
      height: "250mm",
      weight: "90kg"
    },
    {
      id: 10,
      firstName: "Phil",
      lastName: "Nguyen",
      age: 26,
      favoriteColors: ["red", "white", "blue"],
      favoriteSingers: ["Kanye West"],
      nationality: "USA",
      gender: "m",
      zodiac: "Cancer",
      jobTitle: "T.A.",
      company: "CoderSchool",
      friendsCount: 2121,
      followers: 212,
      height: "169mm",
      weight: "90kg"
    }
  ];
  
  // ----------------------------------------------------------------------------------------------------------------------------------------
  // -----> Examples
  // ----------------------------------------------------------------------------------------------------------------------------------------
  // 1. Define a function getAmericans() which takes the people array as an argument
  // and returns an array of people who are Americans.
  // It should look like this[{ firstName: 'Loi', ...}, { firstName: 'Charles', ...}]
  
  const getAmericans = persons => {
    document.getElementById("getAmericans").innerHTML = persons
      .filter(({ nationality }) => nationality === "USA")
      .map(person => person.firstName)
      .join(" ");
  };
  
  function onGetAmericans() {
    getAmericans(people);
  }
  
  // 2. Define a function getCoderSchoolStaff() which takes the people array as an argument
  // and returns an array of people who work at 'CoderSchool'.
  // We would want it to look something like this [{ firstName: 'Loi', ...}, { firstName: 'Charles', ...}]
  
  const getCoderSchoolStaff = persons => {
    document.getElementById("getCoderSchoolStaff").innerHTML = persons
      .filter(person => person.company === "CoderSchool")
      .map(staff => `<li>${staff.firstName}</li>`)
      .join(" ");
  };
  
  function onGetCoderSchoolStaff() {
    getCoderSchoolStaff(people);
  }
  
  // 3. Define a function getMostPopularPerson() which takes the people array as an argument
  // and returns an object. The object will have two keys. A person key will have the person as it's value.
  // The total key will have the total of followers & friends of the most popular person. The person with the most followers & friends
  // is the most popular.
  // It should look like this { person: { firstName: 'Loi' }, total: 9000 }
  
  const getMostPopularPerson = persons => {
    let mostPopulerInfo = { person: {}, totalPopularity: 0 };
  
    persons.map(person => {
      const totalPopularity = person.friendsCount + person.followers;
      if (totalPopularity > mostPopulerInfo.totalPopularity) {
        const newMostPopular = { totalPopularity, person };
        mostPopulerInfo = newMostPopular;
      }
    });
    document.getElementById("getMostPopularPerson").innerHTML = `${
      mostPopulerInfo.person.firstName
    } is the most popular with a score of ${mostPopulerInfo.totalPopularity}`;
  };
  
  function onGetMostPopularPerson() {
    getMostPopularPerson(people);
  }
  
  // ----------------------------------------------------------------------------------------------------------------------------------------
  // -----> Assignment
  // ----------------------------------------------------------------------------------------------------------------------------------------
  
  // 4. Define a function findVietnamese() which will take the people array as an argument and
  // return an array. The array will contain persons who have nationality as VN for Vietnamese.
  // Make sure the function will account for 'VN' and 'vn'
  // It should look like this [{}, {}, {}, ...]
  
  const getVietnameses = persons => {
    document.getElementById("findVietnamese").innerHTML = persons
      .filter(({ nationality }) => nationality === "vn" || nationality === "VN")
      .map(person => `<li>${person.firstName}</li>`)
      .join(" ");
  };
  
  function findVietnamese() {
    getVietnameses(people);
  }
  
  
  
  // 5. Define a function countGenders() which will take the people array as an argument and
  // return a string.
  // It should look like this "There are 7 males and 3 males"
  
  const countGenders = persons => {
    let males = persons.filter(({gender}) => gender === "m").length
    let females = persons.filter(({gender}) => gender === "f").length
    document.getElementById("countGenders").innerHTML = `There are ${males} males and ${females} females.`
  }
  
  function onCountGenders(){
    countGenders(people);
  }
  
  // 6. Define a function findTallest() which will take the people array as an argument and
  // return an string.
  // The string should look like "Charles was the tallest at 250mm"
  
  const findTallest = persons => {
    document.getElementById("findTallest").innerHTML = `${persons.sort((a, b) => parseInt(b.height) - parseInt(a.height))[0].firstName} is the taillest with ${persons[0].height}`
  }
  
  function onFindTallest(){
    findTallest(people);
  }
  
  // 7. Define a function findAverageHeight() which will take the people array as an argument and
  // return an string.
  // The string should look like "The average height of our people is 168mm."
  
  const findAverageHeight = persons => {
    document.getElementById("findAverageHeight").innerHTML = `The average height of our people is ${Math.round(persons.reduce((sum, {height}) => sum + parseInt(height), 0) / persons.length)} mm`
  }
  
  function onFindAverageHeight(){
    findAverageHeight(people)
  }
  
  
  // 8. Define a function findZodiacs() which will take the people array as an argument and
  // return an string. The string should say the users were from these signs
  // The string should look like "We have Cancers, Tauruss, ... among our people"
  
  const findZodiacs = persons => {
    let zodiacs = []
    persons.map(({zodiac}) => !zodiacs.includes(zodiac) ? zodiacs.push(zodiac) : null)
    document.getElementById("findZodiacs").innerHTML = `We have ${zodiacs.map(zodiac => ` ${zodiac}`)}... among our people`
  }
  
  function onFindZodiacs(){
    findZodiacs(people);
  }
  
  // 9. Define a function findAverageAge() which will take the people array as an argument and
  // return an string. The string will have the average age of the people
  // The string should look like "The average age of the people is 21"
  
  const findAverageAge = persons => {
    document.getElementById("findAverageAge").innerHTML = `The average age of our people is ${Math.round(persons.reduce((sum, {age}) => sum + age, 0) / persons.length)} years old`
  }
  
  function onFindAverageAge(){
    findAverageAge(people)
  }
  
  // 10. Define a function findStudents() which will take the people array as an argument and
  // return an array. The array will contain persons who have jobTitle listed as 'Student'.
  // It should look like this [{}, {}, {}]
  
  const findStudents = persons => {return persons.filter(({jobTitle}) => jobTitle === "Student")}
  console.log("findStudents", findStudents(people))
  
  
  // 11. Define a function findNguyens() which will take the people array as an argument and
  // return an array. The array will contain persons whose last names are Nguyen.
  // It should look like this [{}, {}]
  
  const findNguyens = persons => {return persons.filter(({lastName}) => lastName === "Nguyen")}
  console.log("findNguyens", findNguyens(people))
  
  // 12. Define a function findAdults() which will take the people array as an argument and
  // return an array. The array will contain all people who's age is above 18 and above
  // It should look like this [{}, {}, {}, ...]
  
  const findAdults = persons => {return persons.filter(({age}) => age >= 18)}
  console.log("findAdults", findAdults(people))
  
  
  // 13. Define a function findFavoriteColors() which will take the people array as an argument and
  // return an array. The array will contain UNIQUE colors collected from all persons.
  // It should look like this ['red', 'black', 'pink', ...]
  
  const findFavoriteColors = persons => {
    let PeopleFavoriteColors = []
    persons.map(({favoriteColors}) => favoriteColors.map(color => !PeopleFavoriteColors.includes(color) ? PeopleFavoriteColors.push(color) : null))
    return PeopleFavoriteColors
  }
  
  console.log("findFavoriteColors", findFavoriteColors(people))
  
  // 14. Define a function findJobTitles() which will take the people array as an argument and
  // return an array. The array will contain UNIQUE jobTitles.
  // It should look like this ['CEO', 'Instructor', 'Student']
  
  const findJobTitles = persons => {
    let jobTitles = []
    persons.map(({jobTitle}) => !jobTitles.includes(jobTitle) && jobTitles.push(jobTitle))
    return jobTitles
  }
  console.log("findJobTitles", findJobTitles(people))
  
  // 15. Define a function findBirthYears() which will take the people array as an argument and
  // return an array. The array will contain all years which the people were born in.
  // It should look like this ['1997', '1990', '1987', ...]
  
  const findBirthYears = persons => {return persons.map(({age}) => new Date().getFullYear()-age)}
  
  console.log("findBirthYears", findBirthYears(people))
  
  // 16. Define a function sortOldToYoung() which will take the people array as an argument and
  // return an array. The array will contain all persons sorted from oldest to youngest
  // It should look like this [{}, {}, {}, ...]
  
  const sortOldToYoung = persons => {return persons.sort((a, b) => b.age - a.age)}
  
  console.log("sortOldToYoung", sortOldToYoung(people))
  
  // 17. Define a function splitIntoMinorsAndAdults() which will take the people array as an argument and
  // return three arrays. The first array will have two arrays within it.
  // The two nested arrays will contain persons. The 0 index nested array will have minors and the 1 index will have adults.
  // It should look like this [[{}, {}, {}, ...], [{}, {}, {}, ...]]
  
  const splitIntoMinorsAndAdults = persons =>{
    return [[persons.filter(({age}) => age <18)], [persons.filter(({age}) => age >=18)]]
  }
  
  console.log("splitIntoMinorsAndAdults", splitIntoMinorsAndAdults(people))
  
  // 18. Define a function addFavoriteHerosToPeople() which will take the people array as an argument and
  // return an array. The array will contain all persons in the original array where each person has
  // a new key(favoriteSuperHeros) with the value of an empty array [].
  // It should look like this [{firstName: 'Loi', favoriteSuperHeros: [], ...}]
  
  const addFavoriteHerosToPeople = persons =>{
    persons.map(person => person.favoriteSuperHeros = []);
    console.log("addFavoriteHerosToPeople", persons)
  }
  
  addFavoriteHerosToPeople(people)
  
  // 19. Define a function addBirthPlacesToPeople() which will take the people array as an argument and
  // return an array. The array will contain all the original persons in the array with an additional
  // key(birthPlace) with the value of a new object {}.
  // It should look like this [{firstName: 'Loi', birthPlace: {}, ...}]
  
  const addBirthPlacesToPeople = persons => {
    persons.map(person => person.birthPlace = {});
    console.log(persons);
  }
  
  addBirthPlacesToPeople(people)
  
  // 20. Define a function findMostFavoritedColor() which will take the people array as an argument and
  // return an string. The string will be the color which has the most people that have it in their favoriteColors.
  // In the event there are two colors with equal numbers. Return a string that says 'x and y were really popular!'
  // It should look like this 'black' or 'black and red were really popular!'
  
  const findMostFavoritedColor = persons => {
          let mostPopularColors = {};
          persons.map(person => {
              let personalFavoriteColors = person.favoriteColors.map(color => {
                  let colorInLowerCase = color.toLowerCase();
                  mostPopularColors[colorInLowerCase] == null ? mostPopularColors[colorInLowerCase] = 0 : mostPopularColors[colorInLowerCase]++;
              }) 
          })
          let mostPopularNumber = Math.max(...Object.values(mostPopularColors));
          document.getElementById('findMostFavoritedColor').innerHTML = Object.keys(mostPopularColors).find(color => mostPopularColors[color] === mostPopularNumber);
  }
  
  // ----------------------------------------------------------------------------------------------------------------------------------------
  // -----> LOOKING AHEAD
  // ----------------------------------------------------------------------------------------------------------------------------------------
  // 1. This is how we could implement getAmericans() on one line. 'Descruturing' is important for how this function behaves.
  // const getAmericans = persons =>
  //   persons.filter(({ nationality }) => nationality === "USA");
  
  // 2. Arguments/Parameters dictate how our function will behave. This is an example of how we could
  // use an additional parameter and make our function more flexible.
  const getNationality = (persons, soughtNationality) =>
    persons.filter(
      ({ nationality: userNationality }) => soughtNationality === userNationality
    );
  