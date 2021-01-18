import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'
import TechListModal from './components/techs/TechListModal'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {

  useEffect(() => {
    //Initalized Materialize JS for Modals etc.
    M.AutoInit()
  })

  return (
    <Provider store={store}>
      <div>
        <SearchBar />
        <div className="container">
          <h2>Admin Panel</h2>
          <AddBtn />
          <Logs /> 
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
        </div>
      </div>
    </Provider>
  );
}

export default App;
