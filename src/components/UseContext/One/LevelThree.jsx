// Your task
// Build a small dashboard with:
// - A username displayed in two components.
// - An input where the user can enter a new name.
// - A button that updates the username.
// - Both display components updating when the button is clicked.

import { createContext, useContext, useState } from "react"

// const UserContext = createContext('')
const UserContext = createContext({
  username: '',
  handleUsernameChange: () => {},
})

function WelcomeCard(){
  const {username} = useContext(UserContext)
  return <h2>Welcome, {username}</h2>
}

function ProfileCard(){
  const {username} = useContext(UserContext)
  return <h2>Your name is, {username}</h2>
}

function Dashboard(){
  const {handleUsernameChange} = useContext(UserContext)
  const [name, setName] = useState('')

  function handleUpdateUsername(){
    handleUsernameChange(name)
  }
  return(
    <div className="flex flex-col gap-10 bg-mauve-400">
       <div className="flex flex-col gap-3">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleUpdateUsername}>Update Username</button>
       </div>
      <WelcomeCard/>
      <ProfileCard/>

    </div>
  )
}



function LevelThree() {
  const [username, setUserName] = useState('')
  return (
    <UserContext.Provider value={{
      username : username,
      handleUsernameChange : setUserName,
    }}>
   <Dashboard/>
    </UserContext.Provider>
  )
}

export default LevelThree