
import React from 'react'
import AppBody from './AppBody'
import ApplicaitonContextProvider from './context/ApplicaitonContextProvider'


function App() {
  
  return (
   <ApplicaitonContextProvider>
    <AppBody></AppBody>
   </ApplicaitonContextProvider>
  )
}

export default App
