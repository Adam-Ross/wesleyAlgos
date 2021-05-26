// Write a function using array helper methods that gives back the squares, cubes, and quads of every elem in an array

// map
function cubed(arr) {
    return arr.map(elem => {
        return elem**3
    })
}

// some - returns a bool, and checks to see if SOME of the elements meet a criteria
const words = ['the', 'cat', 'is', 'evil']
function greaterThanThree(arr) {
    return arr.some((elem) => {
        return elem.length > 4
    })
}

// every - retruns a bool, and checks to see if EVERY element meets a criteria
function everyOverThree(arr) {
    return arr.every(elem => {
        return elem.length > 3
    })
}

// Filter - return a new array, that filters through old array for criteria
const randomNumbers = [1,3,2,4,5,4,3,4,5,6,7,6,5,4,3,2,1]
function isPrime(num) {
    return num % 2 !== 0
}

function returnPrimes(arr) {
    return arr.filter(elem => {
        return isPrime(elem)
    })
}

function noArrayHelperReturnPrimes(arr) {
    const result = []
    for(let i = 0; i < arr.length; i++) {
        if(isPrime(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}


const data = [
    {
        name: "Wesley",
        age: 30,
        job: "SWE",
        salary: 100
    },
    {
        name: "Garrett",
        age: 38,
        job: "Instructor",
        salary: 100
    },
    {
        name: "Kolby",
        age: 17,
        job: "SWE",
        salary: 100
    },
    {
        name: "Jeffry",
        age: 25,
        job: "SWE",
        salary: 75
    },
]


// Return number of swes
function numberOfSWE(arr) {
    const swes = arr.filter(elem => {
        return elem.job === "SWE"
    })
    return swes.length
}

// return number of instructors
function numberOfInstr(arr) {
    const instructors = arr.filter(elem => {
        return elem.job === "Instructor"
    })
    return instructors.length
}

// returns swes names and salaries
function getNamesAndSalariesOfSWES(arr) {
    const result = []
    // get swes from data
    const swes = arr.filter(elem => {
        return elem.job === 'SWE'
    })
    // make new array that contains names and salries only
    const names = swes.map(elem => {
        return elem.name
    })

    const salaries = swes.map(elem => {
        return elem.salary
    })

    for(let i = 0; i < names.length; i++) {
        result.push({name: names[i]})
    }
    
    for(let i = 0; i < salaries.length; i++) {
        let current = result[i]
        current.salary = salaries[i]
    }
    return result
}


// return instructors

// returns average age of swes



console.log(getNamesAndSalariesOfSWES(data))