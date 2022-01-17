import Router from './Router/Router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import 'react-calendar/dist/Calendar.css'

import './App.css'

function App() {
  return (
    <>
      <ToastContainer />
      <Router />
    </>
  )
}

export default App
