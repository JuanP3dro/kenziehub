import React from 'react'
import { StyledTechCard } from './style'
import Trash from './trash.png'

function TechCard({tech}) {
  return (
    <StyledTechCard>
        <h3 className='title6'>{tech.title}</h3>
        <div className='divCard'>
            <p className='title2'>{tech.status}</p>
            <img src={Trash} alt="" />
        </div>
    </StyledTechCard>
  )
}

export default TechCard