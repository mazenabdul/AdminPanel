import { GET_LOGS, LOGS_ERROR, SET_LOADING, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS } from './types'

// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading()
//     const response = await fetch('/logs')
//     const data = await response.json()
//     dispatch({ type: GET_LOGS, payload: data })
//   }
// }

//Get logs action
export const getLogs = () => async dispatch => {
    try{
      setLoading()
      const response = await fetch('/logs')
      const data = await response.json()
      dispatch({ type: GET_LOGS, payload: data })
    } catch (err) {
      dispatch({ type: LOGS_ERROR, payload: err.response.data })
    }
}
  

//Set loading action
export const setLoading = () => {
  return { type: SET_LOADING }
}

//Add a log
export const addLog =  (log) => async dispatch => {
  try {
    setLoading()
    const response = await fetch('/logs', { method: 'POST', body: JSON.stringify(log), headers: { 'Content-Type': 'application/json' }})
    const data = await response.json
    dispatch({ type: ADD_LOG, payload: data })
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data })
  }
}

//Delete Log
export const deleteLog = id => async dispatch => {
  try {
    setLoading()
    await fetch(`/logs/${id}`, {
      method: 'DELETE'
    }) 
    dispatch({ type: DELETE_LOG, payload: id })
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data })
  }
}

//Set Current
export const setCurrent = log => {
  return { type: SET_CURRENT, payload: log }
}

//Clear Current
export const clearCurrent = () => {
  return { type: CLEAR_CURRENT }
}

//Update Log
export const updateLog = log => async dispatch => {
  try {
    setLoading()

    const data = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: { 'Content-Type':'application/json' } 
    }) 

    dispatch({ type: UPDATE_LOG, payload: data })
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data })
  }
}

//Search action
export const searchLogs = (text) => async dispatch => {
  try{
    setLoading()
    const response = await fetch(`/logs?q=${text}`)
    const data = await response.json()
    dispatch({ type: SEARCH_LOGS, payload: data })
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data })
  }
}
