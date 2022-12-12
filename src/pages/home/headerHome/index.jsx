import React, { useContext} from 'react'
import { UserContext } from '../../../contexts/userContext'

import { StyledHeader } from './style'

function Header() {
  // const [user, setUser] = useState(null)
  const {user, setUser} = useContext(UserContext)
  
  return (
    <StyledHeader>
        <div>
            <h2 className='title1'>{user?.name}</h2>
            <p className='title2'>{user?.course_module}</p>
        </div>
    </StyledHeader>
  )
}

export default Header