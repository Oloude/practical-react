// Requirements
// 1. Create a ThemeContext using createContext.
// 2. Store the current theme in useState, initially "light".
// 3. Provide the current theme and a function to toggle it.
// 4. Create a Dashboard with a toggle button.
// 5. Create WelcomeCard and ProfileCard that both read the theme using useContext.
// 6. Make the dashboard and both cards change their background and text colors when the theme changes.
// 7. Don't pass the theme through props.

import { createContext, useContext, useState } from "react"

const ThemeContext = createContext({
    theme : 'light',
    handleThemeChange : () => {},
})

function WelcomeCard() {
  // Read the theme from Context
  const {theme} = useContext(ThemeContext)
  console.log('WelcomeCard rendered')
 return <h2 className={`${theme === 'light' ? 'text-mauve-800' : 'text-mauve-200'}`}>Welcome guest</h2>
}

function ProfileCard() {
  // Read the theme from Context
   const {theme} = useContext(ThemeContext)
   console.log('ProfileCard rendered')
 return <h2 className={`${theme === 'light' ? 'text-mauve-800' : 'text-mauve-200'}`}>Your name is guest</h2>
}

function Dashboard() {
  // Read the theme and render a toggle button
  const {theme, handleThemeChange} = useContext(ThemeContext)
  const [count, setCount] = useState(1)
  console.log('Dashboard rendered')
  return (
    <div className={`flex flex-col gap-6 px-10 py-10 h-screen ${theme === 'light' ? 'bg-mauve-50' : 'bg-mauve-950'}`}>
        <WelcomeCard/>
        <ProfileCard/>
        <p>{count}</p>
        <button onClick={()=> setCount(prev => prev + 1)}>increment</button>
    <button onClick={() => handleThemeChange(theme === 'light' ? 'dark' : 'light')} className={`border text-xs rounded-md px-2 py-1  ${theme === 'light' ? 'border-mauve-800 text-mauve-800' : 'border-mauve-50 text-mauve-50'}`}>Toggle Theme</button>
    </div>
  )
}

function LevelOne() {
    const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{
        theme ,
        handleThemeChange : setTheme,
    }}>
<Dashboard/>
    </ThemeContext.Provider>
  )
}

export default LevelOne

// A. When you toggle the theme, which components re-render, and why?



// B. If you click the toggle button five times, will React necessarily render each component exactly five times?



// C. If you change a completely unrelated state inside Dashboard, will WelcomeCard and ProfileCard necessarily re-render? Explain your reasoning.


// A. All three re-rendered — correct for your current code.

// Dashboard consumes ThemeContext, so it re-renders when the theme changes. Its children can also re-render as part of that update. Additionally, WelcomeCard and ProfileCard directly consume the changed Context, so React updates them when its value changes.



// B. Exactly five re-renders — not necessarily.

// Five clicks trigger five state updates, but you cannot conclude that every component will render exactly five times. React may batch updates, and development Strict Mode can invoke render logic extra times. For five separate clicks, you'll commonly observe five updates, but render counts aren't a guaranteed one-to-one measurement.



// C. Unrelated state — generally correct for your current code.

// If Dashboard owns another state and updates it, Dashboard re-renders. Its children may also re-render because they are rendered again by their parent. This can happen even though the theme hasn't changed.



// 2. The important distinction: parent renders vs Context updates
// These are two different reasons a component might re-render.
// Scenario 1: Context changes
// theme changes from "light" to "dark".
// - Dashboard re-renders because it consumes the Context.
// - WelcomeCard and ProfileCard re-render because they consume the changed Context.
  
//   Scenario 2: Only unrelated parent state changes
//   Dashboard has another state, such as count, which changes while the theme remains the same.
// - Dashboard re-renders.
// - Its child components may also re-render because React renders them again.
// - The Context value itself does not need to change for this to happen.

// A useful rule to remember:

// useContext subscribes a component to Context changes, but it does not prevent ordinary re-renders caused by its parent.

// Later, we'll explore how React.memo can help in some situations, and why it doesn't block updates from a Context that the component consumes.