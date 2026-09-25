const users = [
  { id: 1, name: "John", age: 25, role: "developer", active: true },
  { id: 2, name: "Sarah", age: 30, role: "designer", active: true },
  { id: 3, name: "Mike", age: 22, role: "developer", active: false },
  { id: 4, name: "Jane", age: 28, role: "manager", active: true },
  { id: 5, name: "David", age: 35, role: "developer", active: true },
  { id: 6, name: "Lisa", age: 24, role: "designer", active: false },
  { id: 7, name: "Tom", age: 31, role: "manager", active: true },
  { id: 8, name: "Emma", age: 27, role: "developer", active: false },
];

export default function LevelTwo() {
  // getActiveDevNames()
  // getNameOfUserBetweenTwentyfiveAndThirty()
  // averageAge()
//   getOldestUser();
// getYongestUser()
// getUniqueRole()
// getUserCountByRole()
// getInactiveActiveUserCount()
// getSortedAge()
getSortedAgeOldest()


  return <p></p>;
}

function getActiveDevNames() {
  const activeDevNames = users
    .filter((user) => user.role === "developer" && user.active)
    .map((user) => user.name);
  console.log(activeDevNames);
}

function getNameOfUserBetweenTwentyfiveAndThirty() {
  const userNameBetweenTwentyAndThirty = users
    .filter((user) => user.age >= 25 && user.age <= 30)
    .map((user) => user.name);
  console.log(userNameBetweenTwentyAndThirty);
}

function averageAge() {
  const totalAge =
    users.reduce((total, user) => (total += user.age), 0) / users.length;
  console.log(totalAge);
}

function getOldestUser() {
  let oldestUser = users[0];
  // let oldestUser = users.reduce((oldest, user) => {

  //     console.log(oldest , user)
  // } , users[0+ 1].id)

  for (let i = 1; i < users.length; i++) {
    if (oldestUser.age < users[i].age) {
      oldestUser = users[i];
    }
  }
  console.log(oldestUser.name);
}

function getYongestUser(){
    let yongest = users[0]

    for (let i = 1; i < users.length; i++) {
    if (yongest.age > users[i].age) {
      yongest = users[i];
    }
  }
  console.log(yongest.name);

}

function getUniqueRole(){
    let roles = users.map(user => user.role)

    let uniqueRole = [...new Set(roles)]
    console.log(uniqueRole)
}

function getUserCountByRole(){
    let countByRole = users.reduce((acc, user) =>  {
        acc[user.role] = (acc[user.role] || 0) + 1
    return acc } , {})
    console.log(countByRole)    
}

function getInactiveActiveUserCount(){
    let activeInactiveUserCount = users.reduce((acc, user) => {
        let props = user.active ? 'active' : 'inactive'
        acc[props] = (acc[props] || 0) + 1
        return acc
    }, {})

    console.log(activeInactiveUserCount)
}

function getSortedAge(){
let sortAgeByYongest = users.toSorted((a,b) => a.age - b.age).map(user => user.name)
console.log(sortAgeByYongest)
}

function getSortedAgeOldest(){
   let sortAgeByOldest = users.toSorted((a,b) => b.age - a.age).map(user => user.name)
console.log(sortAgeByOldest) 
}
