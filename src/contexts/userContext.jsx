import { createContext, useState, useEffect } from "react";
import { Api } from '../services/api.js'

export const UserContext = createContext({})

function UserProvider({children}) {
    const [user, setUser] = useState(null)
    useEffect(() => {
      async function getUser () {
        
        const token  = localStorage.getItem('userToken')
        try {
          Api.defaults.headers.common.authorization = `token ${token}`
          const user = await Api.get('/profile')
          setUser(user.data)
        } catch (error) {
          
        }
      }
      getUser()
    }, [])
  return (
    <UserContext.Provider value={{
        user,
        setUser
    }}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider