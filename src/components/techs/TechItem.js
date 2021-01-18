import React from 'react'
import PropTypes from 'prop-types'

const TechItem = ({ tech }) => {
  return (
    <li className='collection-item'>
      <div>
        {tech.first} {tech.last}
        <a href='#!' className='secondary-content'>
          <i className='material-icons'>delete</i>
        </a>
      </div>
    </li>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
}

export default TechItem
