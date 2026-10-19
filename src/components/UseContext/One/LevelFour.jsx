// The initial shared username must be "Abosede".
// Updating the username should still work as before.
// Clicking Reset Username should restore "Abosede" in both cards.
// Keep the username in Context and the input's draft value in local state.
// Don't pass the username through props.

import { useContext } from "react";
import { createContext, useState } from "react";

const UserContext = createContext({
  username: "",
  handleUsernameChange: () => {},
});

function Dashboard() {
  const [name, setName] = useState("");
  const { handleUsernameChange } = useContext(UserContext);

  return (
    <div className="flex flex-col h-screen py-20 gap-10 bg-mauve-300 px-9">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-mauve-900 px-3 py-1"
        />
        <button onClick={() => handleUsernameChange(name)} className="bg-mauve-800 px-3 py-1 rounded-full text-mauve-100">
          Update username
        </button>
      </div>

      <button onClick={() => handleUsernameChange("Abosede")} className="bg-mauve-800 px-3 py-1 rounded-full text-mauve-100 self-center">Reset</button>
      <WelcomeCard />
      <ProfileCard />
    </div>
  );
}

function WelcomeCard() {
  const { username } = useContext(UserContext);
  return <h2>Welcome, {username}</h2>;
}

function ProfileCard() {
  const { username } = useContext(UserContext);
  return <h2>Your name is, {username}</h2>;
}

function LevelFour() {
  const [username, setUsername] = useState("Abosede");
  return (
    <UserContext.Provider
      value={{
        username,
        handleUsernameChange: setUsername,
      }}
    >
      <Dashboard />
    </UserContext.Provider>
  );
}

export default LevelFour;
