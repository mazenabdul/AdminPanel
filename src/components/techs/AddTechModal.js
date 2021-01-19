import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import { addTechs } from '../../actions/techActions'
import PropTypes from 'prop-types'

const AddTechModal = ({ addTechs }) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmit = () => {
    if(firstName.length === 0 || lastName.length === 0){
      M.toast({ html: 'Please fill out all fields' })
    } else {
      addTechs(firstName, lastName)
      M.toast(({html: 'Technician added'}))
    }
    
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


AddTechModal.propTypes = {
  addTechs: PropTypes.func.isRequired,
}

export default connect(null, { addTechs })(AddTechModal)
