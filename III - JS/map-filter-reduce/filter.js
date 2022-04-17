
function filtraPares(arr){
    const filteredArr = arr.filter(num => num % 2 == 0);

    return filteredArr;
}


console.log(filtraPares([1, 2, 3, 4, 5, 6, 7, 8]))