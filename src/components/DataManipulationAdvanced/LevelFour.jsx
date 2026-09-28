const users = [
  {
    id: 1,
    name: "Ada",
    country: "Nigeria",
    membership: "premium",
    transactions: [
      { type: "income", amount: 5000 },
      { type: "expense", amount: 800 },
      { type: "expense", amount: 300 },
    ],
  },

  {
    id: 2,
    name: "John",
    country: "Ghana",
    membership: "basic",
    transactions: [
      { type: "income", amount: 4000 },
      { type: "expense", amount: 1200 },
      { type: "expense", amount: 500 },
    ],
  },

  {
    id: 3,
    name: "Sarah",
    country: "Nigeria",
    membership: "premium",
    transactions: [
      { type: "income", amount: 6000 },
      { type: "expense", amount: 2000 },
      { type: "expense", amount: 700 },
    ],
  },

  {
    id: 4,
    name: "Mike",
    country: "Kenya",
    membership: "basic",
    transactions: [
      { type: "income", amount: 3500 },
      { type: "expense", amount: 900 },
    ],
  },

  {
    id: 5,
    name: "Grace",
    country: "Nigeria",
    membership: "premium",
    transactions: [
      { type: "income", amount: 4500 },
      { type: "expense", amount: 600 },
      { type: "expense", amount: 400 },
      { type: "expense", amount: 300 },
    ],
  },
];

export default function LevelFour() {
    // calculateUserBalance()
    // findUserWithHighestBalance()
    // calculateTotalBalanceOfPremiumUsers()
    // calculateSpendingByCountry()
    // calculateAverageSpendingPerUser()
    // findCountryWithHighestTotalSpending()
    // findUserWithExpensesGreaterThan50Income()
    calculateBalancePerMembershipType()
  return <div>LevelFour</div>;
}

//46.Calculate each user's balance.
function calculateUserBalance(){
const userBalance = users.reduce((balance, user) => {
    let expensesTotal = user.transactions.reduce((total, transaction) => total +  (transaction.type === 'expense' ? transaction.amount : 0), 0)
    let incomeTotal = user.transactions.reduce((total, transaction) => total +  (transaction.type === 'income' ? transaction.amount : 0), 0)
    balance[user.name] = (balance[user.name] || 0 ) + (incomeTotal - expensesTotal)
    return balance
}, {})

return userBalance
}

//47.Find the user with the highest balance.
function findUserWithHighestBalance(){
let userBalance = calculateUserBalance()
let highestUser = ''
let balance = 0

for(let user in userBalance){
    if(userBalance[user] > balance){
        balance = userBalance[user]
        highestUser = user
    }
}
console.log(userBalance)
}

//48.Calculate the total balance of all premium users.
function calculateTotalBalanceOfPremiumUsers(){
let premiumUsers = users.filter(user => user.membership === 'premium')
let totalBalance = premiumUsers.reduce((balance, user) =>{
    let expensesTotal = user.transactions.reduce((total, transaction) => total +  (transaction.type === 'expense' ? transaction.amount : 0), 0)
    let incomeTotal = user.transactions.reduce((total, transaction) => total +  (transaction.type === 'income' ? transaction.amount : 0), 0)
    return balance + (incomeTotal - expensesTotal )
     }
     ,0)

console.log(totalBalance)
}

//49.Calculate total spending by country.
function calculateSpendingByCountry(){
   
    const totalSpendingByCountry = users.reduce((country, user) => {
         let expensesTotal = user.transactions.reduce((total, transaction) => total +  (transaction.type === 'expense' ? transaction.amount : 0), 0)
        country[user.country] = (country[user.country] || 0) + expensesTotal
        return country
    }, {})
  return totalSpendingByCountry
}

//50.Calculate average spending per user.
function calculateAverageSpendingPerUser(){
const averageSpendingPerUser = users.reduce((spending, user) => {
    if(!spending[user.name]){
        spending[user.name] = []
    }

    spending[user.name].push(user.transactions.filter(t => t.type === 'expense'))
    return spending
}, {})

for(let user in averageSpendingPerUser){
    averageSpendingPerUser[user] = averageSpendingPerUser[user][0].reduce((total, user) => total + user.amount, 0 )/averageSpendingPerUser[user][0].length
}

console.log(averageSpendingPerUser)
}

//51.Find the country with the highest total spending.
function findCountryWithHighestTotalSpending(){
let totalSpendingByCountry = calculateSpendingByCountry()
let highestCountry = ''
let amount = 0

for(let country in totalSpendingByCountry){
   if( totalSpendingByCountry[country] > amount){
    amount = totalSpendingByCountry[country]
    highestCountry = country
   }
}

console.log(highestCountry)
}

//52.Find users whose expenses are greater than 50% of their income.
function findUserWithExpensesGreaterThan50Income(){
let userCatgory = users.reduce((category, user) => {
    let expensesTotal = user.transactions.reduce((total, transaction) => total +  (transaction.type === 'expense' ? transaction.amount : 0), 0)
    let incomeTotal = user.transactions.reduce((total, transaction) => total +  (transaction.type === 'income' ? transaction.amount : 0), 0)

    if(!category[user.name]){
        category[user.name]  = {
            expenses : 0,
            income : 0
        }
    }
   category[user.name].expenses = category[user.name].expenses + expensesTotal
   category[user.name].income = category[user.name].income + incomeTotal
    return category
}, {})

let usersWithExpesesGreaterThanFiftyPercent = []

for(let user in userCatgory){
    let income = userCatgory[user].income
    let expense = userCatgory[user].expenses

    let fiftyPercentIncome = income /2
    if(expense > fiftyPercentIncome){
        usersWithExpesesGreaterThanFiftyPercent.push(user)
    }
}

console.log(usersWithExpesesGreaterThanFiftyPercent)
}

//53.Calculate the average balance for each membership type.
function calculateBalancePerMembershipType(){
    let categoryByMembership = users.reduce((category, user) => {}, {})

    console.log(categoryByMembership)
}
