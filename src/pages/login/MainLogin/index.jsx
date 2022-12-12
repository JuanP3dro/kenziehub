import React from 'react'
import LogoKenzie from './Logo.png'
import Form from './form'
import { StyledMain } from '../../../components/main/style'

function MainLogin() {
  return (
    <StyledMain>
        <img src={LogoKenzie} alt="" />
        <Form />
    </StyledMain>
  )
}

export default MainLogin