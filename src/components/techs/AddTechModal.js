import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmit = () => {
    if(firstName.length === 0 || lastName.length === 0){
      M.toast({ html: 'Please fill out all fields' })
    }
    console.log(firstName, lastName)
    setFirstName('')
    setLastName('')
  }

  return (
    <div id='tech-modal' className='modal' >

      <div className='modal-content'>
        <h4>Add a Techncian</h4>
      
      <div className='row'>
        <div className='input-field'>
          <input type='text' name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)}/>
          <label htmlFor='firstName' className='active'>First Name</label>
        </div>
      </div>

      <div className='row'>
        <div className='input-field'>
          <input type='text' name='lastName' value={lastName} onChange={e => setLastName(e.target.value)}/>
          <label htmlFor='lastName' className='active'>Last Name</label>
        </div>
      </div>
    </div>

    <div className='modal-footer'>
      <a href='#' onClick={onSubmit} className='modal-close waves-effect purple btn'>Enter</a>
    </div>

  </div>
  )
}



export default AddTechModal
