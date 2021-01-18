import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deleteLog, setCurrent } from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({ log, deleteLog, setCurrent  }) => {

  const onDelete = () => {
    deleteLog(log.id)
    M.toast({ html: 'Deleted log' })
  }

  return (
    <li className="collection-item">
      <div>
        <a href='#edit-log-modal' onClick={() => setCurrent(log)} className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>{log.message}</a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID: #{log.id} last updated by {log.name} </span>
          <span className="black-text">{log.tech}</span> on <Moment format='MMMM Do YYYY, h:mm:ss a'/> {log.date}
        </span>

        <a href= '#!' className='secondary-content' onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
}

export default connect(null, { deleteLog, setCurrent })(LogItem)
