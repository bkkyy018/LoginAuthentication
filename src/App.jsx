import { useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { UserContext } from './UserContext'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <UserContext.Provider value={{count,setCount}}>
        <Header/>
        <Outlet/>
    </UserContext.Provider>
    </>
  )
}

export default App
