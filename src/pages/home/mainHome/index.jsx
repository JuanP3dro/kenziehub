import React, { useContext, useEffect } from 'react'
import TechCard from '../../../components/techCard'
import { UserContext } from '../../../contexts/userContext'
import { StyledMainHome } from './style'


function MainHome() {
  const {user, setUser} = useContext(UserContext)
  console.log(user)
  
  console.log(user?.techs)
  // const techs = user.techs
  return (
    <StyledMainHome>
        <section>
          <div className='tech'>
            <h2 className='title5'>Tecnologias</h2>
            <div className='addImg'></div>
          </div>
        </section>
        <ul>
          
          {user?.techs.length > 0 ? user?.techs.map((tech, index) => {
             <TechCard key={index} tech={tech}/>
          }) : <p>Sem tecnologias cadastradas no momento</p>}
           <li>
             <h3 className='title6'>React JS</h3>
             <div className='divCard'>
               <p className='title2'>Intermediário</p>
               <img src=''alt="" />
             </div>
           </li>
        </ul>
        
    </StyledMainHome>
  )
}

export default MainHome