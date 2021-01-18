import React, { useState, useEffect } from 'react'
import TechItem from './TechItem'

const TechListModal = () => {

  const [techs, setTechs] = useState([])
  const [loading, setLoading] = useState(false)

  const getTechs = async () => {
    const response = await fetch('/techs')
    const data = await response.json()

    setTechs(data)
    setLoading(false)
    
  }

  useEffect(() => {
    getTechs()
    //eslint-disable-next-line
  },[])

  return (
      
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading && techs.map(tech => (
            <TechItem tech={tech} key={tech.id}/>
          ))}
        </ul>
      </div>
    </div>
        
  )
}

export default TechListModal
