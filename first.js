// make function that takes in an array, and squares all numbers  in array.
// One way - impure (manipulates input array)x
function squared(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i]**2
    }
    return arr
}

// Pure way
function squaredPure(arr) {
    const result = []
    for(let i = 0; i < arr.length; i++) {
        result.push(arr[i]**2)
    }
    return result
}

// Javascrip array helper methods, array helper method MAP, returns a new array
function squaredHelper(arr) {
    return arr.map(elem => {
        return elem**2
    })
}

// api call res.data

const users = [
    {
        name: 'mike',
        age: 24
    },
    {
        name: 'Phil',
        age: 34
    },
    {
        name: 'steve',
        age: 44
    },
]

function getAges(arr) {
    return arr.map(elem => {
        return elem.age
    })
}

function getNames(arr) {
    return arr.map(elem => {
        return elem.name
    })
}

const names = getNames(users)
const ages = getAges(users)

// get median age of users
function getMedianAge(arr) {
    const length = arr.length 
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / length
}

// Homework / resources
// JS array helper methods
// Array destructuring


const array = [1,2,3,4,5,6]
const sq = array.map((elem) => {
    return elem**2
})

function cube(arr) {
    // Could implicitly return the return array of .MAP helper method
    return arr.map(elem => {
        return elem**3
    })

    // Or, could set to variable and return variable

    const cubed = arr.map(elem => {
        return elem**3
    })

    return cubed
    
}
// console.log(sq)
// console.log(cube(array))

// ______________________Array helper method section ________________-

// forEach, map, filter, every, some, reduce
const prices = [10, 25, 60, 25, 180, 95, 100]

const sales = prices.filter(elem => {
    return elem < 75
})

const expensive = prices.filter(elem => {
    return elem > 75
})

// Is ANYTHING ON SALE? (some)
// const onSale = prices.some(elem => {
//     return elem < 75
// }) 

function onSale(arr) {
    return arr.filter(elem => {
        return elem < 75
    })
}

// IS EVERY ITEM ON SALE - EVERY
const everythinOnSale = prices.every(elem => {
    return elem < 75
})

function ifOnSaleReturnSalesArray(arr) {
    if(onSale(arr)) {
        return arr.filter(elem => {
            return elem < 75
        }) 
    }
}


// console.log(prices)
// console.log(sales)
// console.log(expensive)
// console.log(prices)
console.log(ifOnSaleReturnSalesArray(prices))
