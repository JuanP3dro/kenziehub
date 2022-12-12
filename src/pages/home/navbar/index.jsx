import React from 'react'
import LogoKenzie from './Logo.png'
import {Link} from 'react-router-dom'
import { StyledNavBar } from './styled'

function Navbar() {
  function logout () {    
    localStorage.removeItem('userToken')
  }
  return (
    <StyledNavBar>
        <div>
            <img src={LogoKenzie} alt="" />
            <Link className='logoutBtn' onClick={() => logout()} to={'/'}>Sair</Link>
        </div>
    </StyledNavBar>
  )
}

export default Navbar