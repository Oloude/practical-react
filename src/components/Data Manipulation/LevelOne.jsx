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

function LevelOne() {
    // findUser('mike')
    // hasInactiveUser()
    // everyoneOlderThanEighteen()
    // developerCount()
    // getIds()

  return <div className="p-10 bg-mauve-100 flex flex-col gap-20 min-h-screen">
    <GetNames/>
    <GetDevelopers/>
    <GetActiveUsers/>
    <UserOlderThanTwentyeight/>
    <UserYongerThanTwentyfive/>
  </div>;
}

export default LevelOne;

function GetNames(){
    const names = users.map(user => user.name)
    return(
<div className="grid grid-cols-4 gap-4">
    {
        names.map(name => <p key={name} className="text-mauve-800 shadow-2xs p-3">{name}</p>)
    }
</div>
    )
}

function GetDevelopers(){
    const developers = users.filter(user => user.role === 'developer')
    return (
        <div className="grid grid-cols-4 gap-4">
      {  developers.map(develop => <div key={develop.id} className="flex p-3 shadow-2xs flex-col gap-2 ">
        <div className="flex justify-between items-center">
            <h3 className="text-mauve-700 text-base">{develop.name}</h3>
            <div className={`${develop.active ? 'bg-green-400' : 'bg-red-400'} w-2 h-2 rounded-full`}></div>
        </div>
        <span className="text-mauve-500 text-sm">{develop.role}</span>

        </div>)}
        </div>
    )
}


function GetActiveUsers(){
    const activeUserNames = users.filter(user => user.active).map(user => user.name)
    return (
        <div className="grid grid-cols-4 gap-4">
      {  activeUserNames.map(name => <p key={name} className="text-mauve-800 shadow-2xs p-3">{name}</p>)}
        </div>
    )
}

function findUser(name){
  const user = users.find(user => user.name.toLowerCase() === name)
  console.log(user)
}

function UserOlderThanTwentyeight(){
    const userOlderThanTwentyeight = users.filter(user => user.age > 28).map(user => user.name)
    return (
        <div className="grid grid-cols-4 gap-4">
      {  userOlderThanTwentyeight.map(name => <p key={name} className="text-mauve-800 shadow-2xs p-3">{name}</p>)}
        </div>
    )
}

function UserYongerThanTwentyfive(){
    const userYongerThanTwentyfive = users.filter(user => user.age < 25).map(user => user.name)
    return (
        <div className="grid grid-cols-4 gap-4">
      {  userYongerThanTwentyfive.map(name => <p key={name} className="text-mauve-800 shadow-2xs p-3">{name}</p>)}
        </div>
    )
}

function hasInactiveUser(){
    const hasInactiveUsers = users.some(user => !user.active)
    console.log(hasInactiveUsers)
}

function everyoneOlderThanEighteen(){
    const isEveryoneOlderThanEighteen = users.every(user => user.age >18)
    console.log(isEveryoneOlderThanEighteen)
}

function developerCount(){
    const numberOfDeveloper = users.filter(user => user.role === 'developer').length
    console.log(numberOfDeveloper)
}

function getIds(){
    const ids = users.map(user => user.id)
    console.log(ids)
}