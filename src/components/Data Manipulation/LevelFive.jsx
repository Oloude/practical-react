const transactions = [
  {
    id: 1,
    user: "John",
    type: "deposit",
    amount: 5000,
    status: "completed",
  },
  {
    id: 2,
    user: "Sarah",
    type: "withdrawal",
    amount: 2000,
    status: "completed",
  },
  {
    id: 3,
    user: "John",
    type: "withdrawal",
    amount: 1000,
    status: "pending",
  },
  {
    id: 4,
    user: "Mike",
    type: "deposit",
    amount: 3000,
    status: "completed",
  },
  {
    id: 5,
    user: "John",
    type: "deposit",
    amount: 2000,
    status: "completed",
  },
  {
    id: 6,
    user: "Sarah",
    type: "deposit",
    amount: 4000,
    status: "completed",
  },
  {
    id: 7,
    user: "Mike",
    type: "withdrawal",
    amount: 500,
    status: "completed",
  },
];

export default function LevelFive() {
  // getAllCompletedTransaction()
  // getAllDeposit()
  // getAllWithdrawals()
  // calculateTotalDeposits()
  // calculateTotalWithdrawal()
  // calculateCompletedTransactions()
  // calculateBalance();
  calculateUserBalance()
  // getUserWithHighestBalance()
  // transformData()
  return <div>LeveFive</div>;
}

function getAllCompletedTransaction() {
  return transactions.filter(
    (transaction) => transaction.status === "completed",
  );

}

function getAllDeposit() {
  const allDeposit = transactions.filter(
    (transaction) => transaction.type === "deposit",
  );

  console.log(allDeposit);
}

function getAllWithdrawals() {
  const allWithdrawals = transactions.filter(
    (transaction) => transaction.type === "withdrawal",
  );

  console.log(allWithdrawals);
}

function calculateTotalDeposits() {
  return transactions.reduce(
    (total, transaction) =>
      total + (transaction.type === "deposit" ? transaction.amount : 0),
    0,
  );

}

function calculateTotalWithdrawal() {
  return transactions.reduce(
    (total, transaction) =>
      total + (transaction.type === "withdrawal" ? transaction.amount : 0),
    0,
  );

}

function calculateCompletedTransactions() {
  const totalCompletedTransactions = transactions.reduce(
    (total, transaction) =>
      total + (transaction.status === "completed" ? transaction.amount : 0),
    0,
  );

  console.log(totalCompletedTransactions);
}

function calculateBalance() {
  const totalDeposit = transactions.reduce(
    (total, transaction) =>
      total + (transaction.type === "deposit" ? transaction.amount : 0),
    0,
  );
  const totalWithdrawal = transactions.reduce(
    (total, transaction) =>
      total + (transaction.type === "withdrawal" ? transaction.amount : 0),
    0,
  );

  return  totalDeposit - totalWithdrawal;

}

function calculateUserBalance(){
  const userBalance = transactions.reduce((user, transaction) => {
    
    user[transaction.user] = (user[transaction.user] || 0) + (transaction.type === 'deposit' ? transaction.amount : -transaction.amount)
    return user
  },{})

  console.log(userBalance)
}

function getUserWithHighestBalance(){
  const userBalance = transactions.reduce((user, transaction) => {
    user[transaction.user] = (user[transaction.user] || 0) + (transaction.type === 'deposit' ? transaction.amount : -transaction.amount)
    return user
  },{})

  let highestBalance = 0
  let highestUser = ''

  for(let user in userBalance){
    if(userBalance[user] > highestBalance){
      highestBalance = userBalance[user]
      highestUser = user
    }
  }

  console.log(highestUser)
}

function transformData(){
  
 let transformedData =  {
  totalTransactions: transactions.length,
  completedTransactions: getAllCompletedTransaction().length,
  pendingTransactions: transactions.filter(transaction => transaction.status === 'pending').length,
  totalDeposits: calculateTotalDeposits(),
  totalWithdrawals: calculateTotalWithdrawal(),
  balance: calculateBalance(),
}

console.log(transformedData)
}