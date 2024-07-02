import { useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { UserContext } from './UserContext'
import { ToastContainer } from 'react-toastify'

function App() {
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <>
    <UserContext.Provider value={{user, setUser,email, setEmail,password, setPassword}}>
        <Header/>
        <Outlet/>
    </UserContext.Provider>
    </>
  )
}

export default App
