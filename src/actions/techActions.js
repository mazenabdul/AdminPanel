import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR } from './types'

//Get list of techs
export const getTechs = () => async dispatch => {
  try{
    setLoading()
    const response = await fetch('/techs')
    const data = await response.json()
    dispatch({ type: GET_TECHS, payload: data })
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.data })
  }
}

//Add a technician 
export const addTechs = tech => async dispatch => {
  try {
    setLoading()
    const response = await fetch('/techs', { method: 'POST', body: JSON.stringify(tech), headers: { 'Content-Type': 'application/json' }})
    const data = await response.json
    dispatch({ type: ADD_TECH, payload: data })
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.data })
  }
}

//Delete a technician 
export const deleteTech = id => async dispatch => {
  try {
    setLoading()
    await fetch(`/techs/${id}`, {
      method: 'DELETE'
    }) 
    dispatch({ type: DELETE_TECH, payload: id })
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.data })
  }
}

//Set Loading
//Set loading action
export const setLoading = () => {
  return { type: SET_LOADING }
}


//Error with techs