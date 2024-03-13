import React from 'react'
import { useState } from 'react';

export const applicationContext = React.createContext([]);
const TASK = [{title: "tache 1"}, {title: "tache 2"},{title: "tache 3"}];
//créer un context qui va recevoir des fils et les transmettres via le provider a l'app
function ApplicaitonContextProvider({children}) {

    const [state, setState] = useState([TASK]) //state va etre un tableau
    const updateState = (newState) =>{
        setState(newState)
    }

  return (
  
    <applicationContext.Provider value={{state, updateState}}>
          <section>{children}</section>
    </applicationContext.Provider>
  )
}

export default ApplicaitonContextProvider