function somaNumeros(arr){
    return arr.reduce(function(previus, current){
        return previus + current;
    }, 0)
}

const arr = [1, 2]

const lista = [{nome: 'arroz', preco: 6}, {nome: 'carne', preco: 20}, {nome: 'leite', preco: 5}]


function calcularRestante(arr, saldo){
    return arr.reduce(function(previus, current){
        return previus - current.preco
 }, saldo)
}

console.log(calcularRestante(lista, 50))