import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import { updateLog } from '../../actions/logActions'
import PropTypes from 'prop-types'
import TechSelectOptions from '../techs/TechSelectOptions'

const EditLogModal = ({ updateLog, current }) => {

  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  useEffect(() => {
    if(current){
      setMessage(current.message)
      setTech(current.tech)
      setAttention(current.attention)
    }
  }, [current])

  const onSubmit = () => {
    if(message.length === 0 || tech.length === 0){
      M.toast({ html: 'Please fill out all fields' })
    }
    const updatedLog = {
      id: current.id,
      message,
      attention, 
      tech, 
      date: new Date()
    }

    updateLog(updatedLog)
    M.toast({ html: 'Log updated successfully' })

    //Clear fields
    setMessage('')
    setTech('')
    setAttention(false)
  }

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>

      <div className='modal-content'>
        <h4>Edit System Log</h4>
      

      <div className='row'>
        <div className='input-field'>
          <input placeholder='Log Message' type='text' name='message' value={message} onChange={e => setMessage(e.target.value)}/>
          
        </div>
      </div>

      <div className='row'>
        <div className='input-field'>
          <select name='tech' value={tech} className='browser-default' onChange={e => setTech(e.target.value)}>
            <TechSelectOptions />
          </select>
        </div>
      </div>

      <div className='row'>
        <div className='input-field'>
          <p>
            <label>
              <input type='checkbox' className='filled-in' checked={attention} value={attention} onChange={e => setAttention(!attention)}/>
              <span>Needs Attention</span>
            </label>
          </p>
        </div>
      </div>
    </div>

    <div className='modal-footer'>
      <a href='#' onClick={onSubmit} className='modal-close waves-effect purple btn'>Enter</a>
    </div>

  </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '75%'
}

EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object
}

const mapStatetoProps = state => ({
  current: state.log.current
})

export default connect(mapStatetoProps, { updateLog })(EditLogModal)
