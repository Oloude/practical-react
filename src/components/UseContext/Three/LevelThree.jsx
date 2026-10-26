// Requirements:
// - Create an AuthContext.
// - Start with the user logged out (user should be null).
// - Put login and logout functions inside AuthProvider.
// - login should set the user to { name: "Abosede", email: "abosede@example.com" }.
// - logout should reset the user to null.
// - Create a Navbar that displays either Welcome, Abosede or Login, depending on authentication state.
// - Create a Profile that displays the user's name and email when logged in, or Please log in otherwise.
// - Add login/logout buttons that work through Context.
// - Do not pass authentication state or functions through props.

import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

function AuthProvider({children}){
    const [loginState, setLoginState] = useState(null)

    function handleLogin(){
        setLoginState({ name: "Abosede", email: "abosede@example.com" })
    }

    function handleLogout(){
        setLoginState(null)
    }

    return  <AuthContext.Provider value={{
        loginState,
        handleLogin,
        handleLogout
    }}>
    {children}
    </AuthContext.Provider>
}

function Profile(){
    const {loginState} = useContext(AuthContext)

    return (
      <> {
        loginState === null ? <div className="flex flex-col gap-4 items-center py-5">
            <p className="text-2xl text-mauve-800">Please login</p>
        </div> : <div className="flex flex-col gap-5 px-4 py-5">
            <p className="text-sm text-mauve-800">{loginState.name}</p>
            <span className="text-xs text-mauve-600">{loginState.email}</span>
        </div>
       }</>
        
    )
}

function Navbar(){
    const {loginState, handleLogin, handleLogout} = useContext(AuthContext)
    return (
        <div className="shadow h-12 border-b border-mauve-500 px-4 py-1 flex justify-between gap-2 items-center">
        <h3>{
            loginState === null ? 'Welcome Quest' : `Welcome ${loginState.name}`
        }</h3>
        {
           loginState === null ? <button onClick={handleLogin} className="text-mauve-100 bg-mauve-800 px-3 py-1 rounded-full text-xs">Login</button>  : <button onClick={handleLogout} className="text-mauve-100 bg-mauve-800 px-3 py-1 rounded-full text-xs">Logout</button>
        }
        </div>
    )
}

function AuthApp(){
    return (
        <AuthProvider>
            <Navbar/>
            <Profile/>

        </AuthProvider>
    )
}

export default AuthApp