import React from 'react'
import LogoKenzie from './Logo.png'
import FormRegister from './formRegister'
import { StyledMain } from '../../../components/main/style'
import { Link } from 'react-router-dom'

function MainRegister() {
  return (
    <StyledMain>
        <div>
            <img src={LogoKenzie} alt="" />
            <Link className='goLogin title4' to={'/'}>Voltar</Link>
        </div>
        <FormRegister/>
    </StyledMain>
  )
}

export default MainRegister