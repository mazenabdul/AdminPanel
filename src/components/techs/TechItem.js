import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteTech } from '../../actions/techActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const TechItem = ({ tech, deleteTech }) => {

  const onDelete = () => {
    deleteTech(tech.id)
    M.toast({ html: 'Technician deleted' })
  }

  return (
    <li className='collection-item'>
      <div>
        {tech.first} {tech.last}
        <a onClick={onDelete} href='#!' className='secondary-content'>
          <i className='material-icons'>delete</i>
        </a>
      </div>
    </li>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
}

export default connect(null , { deleteTech })(TechItem)
