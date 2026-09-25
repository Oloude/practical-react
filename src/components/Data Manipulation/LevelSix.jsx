const users = [
  {
    id: 1,
    name: "John",
    country: "Nigeria",
    orders: [
      { product: "Laptop", amount: 1200, status: "completed" },
      { product: "Phone", amount: 800, status: "completed" },
    ],
  },
  {
    id: 2,
    name: "Sarah",
    country: "Ghana",
    orders: [
      { product: "Phone", amount: 800, status: "pending" },
      { product: "Headphones", amount: 150, status: "completed" },
    ],
  },
  {
    id: 3,
    name: "Mike",
    country: "Nigeria",
    orders: [
      { product: "Laptop", amount: 1200, status: "completed" },
      { product: "Mouse", amount: 50, status: "completed" },
    ],
  },
];

export default function LevelSix() {
    // getAllNigerianUser()
    // getAllCompletedOrders()
    // calculateUserSpent()
    // findHighestSpendingUser()
    // calculateSpendingByCountry()
    getMostPurchasedProduct()
    //  createLeaderboard()

  return (
    <div>LevelSix</div>
  )
}

// 56. Get all Nigerian users
function getAllNigerianUser(){
    const allNigerianUser = users.filter(user => user.country === 'Nigeria')
    console.log(allNigerianUser)
}

// 57. Get all completed orders
function getAllCompletedOrders(){
const allCompletedOrders = users.reduce((order, user) => {
    order.push(...user.orders.filter(order => order.status === 'completed'))
    return order
}, [])
console.log(allCompletedOrders)
}

// 58. Calculate how much each user has spent
function calculateUserSpent(){
const userSpent = users.reduce((total, user)=> {
    total[user.name] = (total[user.name] || 0) + user.orders.reduce((total, order)=> total + (order.status === 'completed' ? order.amount : 0),0)
    return total
},{})

console.log(userSpent)
}

// 59. Find the highest-spending user
function findHighestSpendingUser(){
   const userSpent = users.reduce((total, user)=> {
    total[user.name] = (total[user.name] || 0) + user.orders.reduce((total, order)=> total + (order.status === 'completed' ? order.amount : 0),0)
    return total
},{})

let highestUser = ''
let highest = 0

for(let user in userSpent){
    if(userSpent[user] > highest) {
        highest = userSpent[user]
        highestUser = user
    }
}

console.log(highestUser)
}

// Calculate spending by country
function calculateSpendingByCountry(){
    const spendingByCountry = users.reduce((spending, user)=>{
        spending[user.country] = (spending[user.country] || 0 ) + user.orders.reduce((total, order)=> total + (order.status === 'completed' ? order.amount : 0),0)
        return spending
    } ,{})
    console.log(spendingByCountry)
}

// Find the most purchased product
function getMostPurchasedProduct(){
    const products = users.flatMap(user => user.orders)
    const productCount = products.reduce((total, product) => {
        total[product.product] = (total[product.product] || 0) + (product.status === 'completed' ? 1 : 0)
        return total
    }, {})
    
    let mostPurchasedProduct = ''
    let productNum = 0
    for(let product in productCount){
       if(productCount[product] > productNum){
        mostPurchasedProduct = product
        productNum = productCount[product]
       }
    }
    console.log(mostPurchasedProduct)
}

// 62. Create a leaderboard
function createLeaderboard(){
 const userSpent = users.reduce((total, user)=> {
    total[user.name] = (total[user.name] || 0) + user.orders.reduce((total, order)=> total + (order.status === 'completed' ? order.amount : 0),0)
    return total
},{})

// let first = 0
let spentArr = Object.entries(userSpent).flatMap(user => ({name: user[0], totalSpent: user[1]}))
console.log(spentArr)

const leaderboard = spentArr.sort((a,b)=> b.totalSpent - a.totalSpent).map((items, i) =>({rank : i+1 ,...items}))
console.log(leaderboard)

}


