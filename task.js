// pluck("name") => [12,20000]

const { json } = require("express")

// pluck("price")
// Total
// Discount(10)
// tax(18.5)
// deliverTo(TN, country)


var items =[
    { id: 1, name: 'NYSE', price: 1641 },
    { id: 2, name: 'NYSE', price: 7755 },
    { id: 3, name: 'NASDAQ', price: 2637 },
    { id: 4, name: 'NASDAQ', price: 1416 },
    { id: 5, name: 'NASDAQ', price: 8516 },
    { id: 6, name: 'NASDAQ', price: 4616 },
    { id: 7, name: 'NASDAQ', price: 4557 },
    { id: 8, name: 'NYSE', price: 8396 },
    { id: 9, name: 'NASDAQ', price: 6942 },
    { id: 10, name: 'NASDAQ', price: 8888 },
    { id: 11, name: 'NASDAQ', price: 8914 },
    { id: 12, name: 'NASDAQ', price: 8081 },
    { id: 13, name: 'NYSE', price: 1486 },
    { id: 14, name: 'NYSE', price: 3186 },
    { id: 15, name: 'NASDAQ', price: 6710 },
    { id: 16, name: 'NASDAQ', price: 4920 },
    { id: 17, name: 'NASDAQ', price: 2220 },
    { id: 18, name: 'NYSE', price: 3287 },
    { id: 19, name: 'NYSE', price: 9776 },
    { id: 20, name: 'NYSE', price: 2638 }
  ]

const print = (...value) =>{
   
    if(value[1] && value[2]){
        console.log('Your List')
        value[0].forEach(el => {
            console.log(el[value[1]],el[value[2]])
        });
    } else if(value[1]){
        console.log('Your List by',value[1])
        value[0].forEach(el => {
            console.log(el[value[1]])
        });
    }else if(value[2]){
        console.log('Your List by',value[2])
        value[0].forEach(el => {
            console.log(el[value[2]])
        });
    }
    
}



const pluck = (value,value2) => (arr) =>{
    print(arr,value,value2)
    return arr
}

// console.log(pluck(items,'price'))

const total = (value) => value.reduce((prev,el )=> {
    return prev + el.price
},0)


const discount = (value) => (total) => {
    console.log('Your Total Amount is',total)
    console.log('Discount is' + ' ' + value + '%')
    var dis = total - (total/100 * value)
    console.log('Amount after discount',dis)
    return dis
}
const tax = (value) => (amount) => {
    var finltoal = amount + (amount/100 * value)
    console.log("Total amount inclusive tax",finltoal)
    return finltoal
}

const deliverTo = (state,country) => (value) => {
    return `Your list will be deliverd to ${state} ${country} and total amount is ${value}`
}

// console.log(tax(discount(total(pluck(items,'name')))))

const pipe = (...fns) => (x) => fns.reduce((v,f) => f(v),x)

console.log(pipe(pluck('name',''),total,discount(10),tax(18),deliverTo('Maharashtra','India'))(items))