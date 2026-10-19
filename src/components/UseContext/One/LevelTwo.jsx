import { createContext, useContext } from "react";

const UserContext = createContext("");

function WelcomeCard() {
    const username = useContext(UserContext)
  return <h2>Welcome, {username}</h2>;
}

function ProfileCard() {
     const username = useContext(UserContext)
  return <h2>Your name is, {username}</h2>;
}

function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <WelcomeCard />
      <ProfileCard />
    </div>
  );
}

function LevelTwo() {
  return <UserContext.Provider value='Abosede'>
    <Dashboard/>
  </UserContext.Provider>;
}

export default LevelTwo;
