import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { searchLogs } from '../../actions/logActions'
import PropTypes from 'prop-types'

const SearchBar = ({ searchLogs }) => {

  const text = useRef('')

  const onChange = e => {
    setTimeout(() => {
      searchLogs(text.current.value)
    },1500)
    
  }

  return (
    
    <nav style={{ marginBottom: '30px' }} className='purple'>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input placeholder='Search' id="search" type="search" ref={text} onChange={onChange} required/>
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
    
  )
}

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
}

export default connect(null, { searchLogs })(SearchBar)
