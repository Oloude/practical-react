
import { createContext, useContext } from "react";

const UserContext = createContext("");

function Profile() {
  // TODO: Read the username from UserContext
  const username = useContext(UserContext)

  return <h2>Hello, {username}</h2>;
}

function Dashboard() {
  return <Profile />;
}


function LevelOne() {
  return (
    <UserContext.Provider value="Abosede">
      <Dashboard />
    </UserContext.Provider>
  )
}

export default LevelOne