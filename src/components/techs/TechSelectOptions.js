import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTechs } from '../../actions/techActions'

const TechSelectOptions = ({ getTechs, tech: { techs, loading } })  => {

  useEffect(() => {
    getTechs()
    //eslint-disable-next-line
  },[])

  return (
    !loading && techs !== null && techs.map(tech => <option key={tech.id} value={`${tech.first} ${tech.last}`}>
      {tech.first} {tech.last}
    </option>)
  )
}

TechSelectOptions.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechSelectOptions)
