const transactions = [
  {
    id: 1,
    user: "Ada",
    type: "income",
    category: "Salary",
    amount: 5000,
    date: "2026-01-05",
  },
  {
    id: 2,
    user: "Ada",
    type: "expense",
    category: "Food",
    amount: 300,
    date: "2026-01-08",
  },
  {
    id: 3,
    user: "Ada",
    type: "expense",
    category: "Transport",
    amount: 150,
    date: "2026-01-10",
  },
  {
    id: 4,
    user: "John",
    type: "income",
    category: "Salary",
    amount: 4200,
    date: "2026-01-05",
  },
  {
    id: 5,
    user: "John",
    type: "expense",
    category: "Food",
    amount: 450,
    date: "2026-01-07",
  },
  {
    id: 6,
    user: "John",
    type: "expense",
    category: "Entertainment",
    amount: 200,
    date: "2026-01-15",
  },
  {
    id: 7,
    user: "Ada",
    type: "income",
    category: "Freelance",
    amount: 1200,
    date: "2026-01-20",
  },
  {
    id: 8,
    user: "John",
    type: "income",
    category: "Freelance",
    amount: 800,
    date: "2026-01-21",
  },
  {
    id: 9,
    user: "Ada",
    type: "expense",
    category: "Shopping",
    amount: 600,
    date: "2026-01-25",
  },
  {
    id: 10,
    user: "John",
    type: "expense",
    category: "Transport",
    amount: 180,
    date: "2026-01-27",
  },
];

export default function LevelThree() {
    //calculateTotalIncome()
    // calculateTotalExpenses()
    // calculateBalance()
    // calculateEachUserBalance()
    // calculateIncomeByUser()
    // calculateUserExpenses()
    // getHighestSpendingCategory()
    // findEachUserLargestExpense()
    // findDayWithHighestSpending()
    // sortTransactionFromNewestToOldest()
    // createTransactionSummary()
    // createSpendingChartData()
    createIncomeChart()
  return (
    <div>LevelThree</div>
  )
}

//31.Calculate total income.
function calculateTotalIncome(){
const incomeArr = transactions.filter(transaction => transaction.type === 'income')
const totalIncome = incomeArr.reduce((total,transaction) => total + transaction.amount ,0)
return totalIncome
}

//32.Calculate total expenses.
function calculateTotalExpenses(){
    const expensesArr = transactions.filter(transaction => transaction.type === 'expense')
    const totalExpenses = expensesArr.reduce((total,transaction) => total + transaction.amount ,0)
    return totalExpenses
}

//33.Calculate the overall balance.
function calculateBalance(){
    return calculateTotalIncome() - calculateTotalExpenses()
}

//34.Calculate each user's balance.
function calculateEachUserBalance(){
    const userBalance = transactions.reduce((user, transaction) => {
        user[transaction.user] = (user[transaction.user] || 0) + (transaction.type === 'income' ? transaction.amount : -transaction.amount) 
        return user
    }, {})
console.log(userBalance)
}

//35.Calculate each user's total income.
function calculateIncomeByUser(){
    const eachUserIncome  = transactions.reduce((userIncome, transaction) => {
        userIncome[transaction.user] = (userIncome[transaction.user] || 0) + (transaction.type === 'income' ? transaction.amount : 0)
        return userIncome
    }, {})

    console.log(eachUserIncome)
}

//36.Calculate each user's total expenses.
function calculateUserExpenses(){
    const userExpenses = transactions.reduce((userIncome, transaction) => {
        userIncome[transaction.user] = (userIncome[transaction.user] || 0) + (transaction.type === 'expense' ? transaction.amount : 0)
        return userIncome
    }, {})

    console.log(userExpenses)
}

//37.Find the highest spending category.
function getHighestSpendingCategory(){
const spendingByCategory = transactions.reduce((spending, transaction) => {
    spending[transaction.category] = (spending[transaction.category] || 0) + (transaction.type === 'expense' ? transaction.amount : 0 )
    return spending
}, {})

let highestSpedingCategory = ''
let amount = 0

for(let category in spendingByCategory){
    if(spendingByCategory[category] > amount){
        highestSpedingCategory = category
        amount = spendingByCategory[category]
    }
}

console.log(highestSpedingCategory)
}

//38.Calculate spending by category.
// {
//   Food: ...,
//   Transport: ...,
//   Entertainment: ...,
//   Shopping: ...
// }

function calculateSpendingByCategory(){
    const spendingByCategory = transactions.reduce((spending, transaction) => {
    spending[transaction.category] = (spending[transaction.category] || 0) + (transaction.type === 'expense' ? transaction.amount : 0 )
    return spending
}, {})
console.log(spendingByCategory)
}

//39.Calculate income by category.
function calculateIncomeByCategory(){
    const incomeByCategory = transactions.reduce((spending, transaction) => {
    spending[transaction.category] = (spending[transaction.category] || 0) + (transaction.type === 'income' ? transaction.amount : 0 )
    return spending
}, {})
console.log(incomeByCategory)
}

//40.Find each user's largest expense.
// Expected:

// {
//   Ada: {
//     category: "Shopping",
//     amount: 600
//   },

//   John: {
//     category: "Food",
//     amount: 450
//   }
// }
function findEachUserLargestExpense(){
const spendingByUser = transactions.reduce((spending, transaction) => {
    if(!spending[transaction.user]){
        spending[transaction.user] = []
    }

    transaction.type === 'expense' && spending[transaction.user].push({category : transaction.category, amount: transaction.amount})
    return spending
}, {})

for(let user in spendingByUser){
  spendingByUser[user] =  spendingByUser[user].toSorted((a,b) => b.amount - a.amount)
}

for(let user in spendingByUser){
     spendingByUser[user] =  spendingByUser[user][0]
}


console.log(spendingByUser)
}

//41.Find the month/day with the highest spending.
function findDayWithHighestSpending(){
    const expensesArr = transactions.filter(transaction => transaction.type === 'expense')

    const categoriseExpensesByDay = expensesArr.reduce((day, transaction) => {
        day[transaction.date] = (day[transaction.date] || 0) + transaction.amount
        return day
    }, {})

    let dayWithMostExpenses = ''
    let amount = 0

    for(let day in categoriseExpensesByDay){
        if(categoriseExpensesByDay[day] > amount){
           amount = categoriseExpensesByDay[day]
           dayWithMostExpenses = day 
        }
    }

    console.log(dayWithMostExpenses)
}

//42.Sort transactions from newest to oldest.
function sortTransactionFromNewestToOldest(){
    let sortedTransactions = transactions.toSorted((a,b) => {
        let aDate = new Date(a.date)
        let bDate = new Date(b.date)
        return bDate.getTime() - aDate.getTime()
    })

    console.log(sortedTransactions)
}


//43.Create a transaction summary:
// [
//   {
//     id: 1,
//     description: "Salary income",
//     amount: 5000,
//     isIncome: true
//   },
//   ...
// ]
function createTransactionSummary(){
    const transactionSummary = transactions.map(transaction => {
        return {
            id: transaction.id,
            description : `${transaction.category} ${transaction.type}`,
            amount : transaction.amount,
            isIncome : transaction.type === 'income'
        }
    })

    console.log(transactionSummary)
}


//44.Create data suitable for a spending chart:
// [
//   {
//     category: "Food",
//     amount: 750
//   },
//   {
//     category: "Transport",
//     amount: 330
//   },
//   ...
// ]
function createSpendingChartData(){
    const spendingByCategory = transactions.reduce((spending, transaction) => {
    spending[transaction.category] = (spending[transaction.category] || 0) + (transaction.type === 'expense' ? transaction.amount : 0 )
    return spending
}, {})

let spendingByCategoryArr = Object.entries(spendingByCategory).map(arr => ({category : arr[0], amount:arr[1]}))
console.log(spendingByCategoryArr)
}

//45.Create data suitable for an income-vs-expense chart:
// {
//   income: ...,
//   expenses: ...,
//   balance: ...
// }

function createIncomeChart(){
let data = {
    income: calculateTotalIncome(),
    expenses : calculateTotalExpenses(),
    balance : calculateBalance()

}
console.log(data)
}