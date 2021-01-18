import React, {  useEffect } from 'react'
import { connect } from 'react-redux'
import LogItem from './LogItem'
import Preloader from '../layout/Preloader'
import PropTypes from 'prop-types'
import { getLogs } from '../../actions/logActions'

const Logs = ({ log: { logs, loading }, getLogs}) => {
  
  useEffect(() => {
    getLogs()
    //eslint-disable-next-line
  },[])

  if(loading){
    return <Preloader />
  }

  return (
      <ul className="collection with-header">
       <li className="collection-header"><h4 className="center">System Logs</h4></li>
        {loading || logs === null ? 
        (<p className="center">No Logs to show...</p>) : (logs.map(log => <LogItem log={log} key={log.id} />))}
      </ul>
        
  )
}

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
}

//When bringing app level state into a component, it is brought in as a prop. mapStatetoProp is null for just bringing in actions
const mapStatetoProps = state => ({
  //State.log pertains to the root reducer "log". Name must match
  log: state.log
})

export default connect(mapStatetoProps, { getLogs })(Logs)
