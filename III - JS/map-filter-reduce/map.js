// Com o this

const banana = {
    value: 2,
}

const laranja = {
    value: 3,
}


function mapComThis(arr, thisArg){
    return arr.map(function (item) {
        return item * this.value
    }, thisArg)
}

const nums = [1, 2]

console.log('é banana: ' + mapComThis(nums, banana))

// Sem o this

const array = [1, 2, 3, 4, 5, 6]


console.log(array.map(num => num * 2))

console.log (array)
