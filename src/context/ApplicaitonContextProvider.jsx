import React from 'react'
import { useState } from 'react';

export const applicationContext = React.createContext([]);

const TASK = [
  {id: 1, favoris: false, title: "générer le projet avec vite"}, 
  {id: 2, favoris: false, title: "Configurer le projet"},
  {id: 3, favoris: false, title: "Créer les composants"},
  {id: 4, favoris: false, title: "Créer le contexte"},
  {id: 5, favoris: false, title: "Mettre a disposition le contexte"},
  {id: 6, favoris: false, title: "Utiliser le contexte"},
]

//créer un context qui va recevoir des fils et les transmettres via le provider a l'app
function ApplicaitonContextProvider({children}) {

    const [state, setState] = useState(TASK) //state va etre un tableau
    const updateState = (newState) =>{
        setState(newState)
    }
    
    const toggleFavoris = ({id}) => {
      //recupere l'element en favoris
      const favorisItem = state.filter(element => element.id === id)[0];
      //recupere les autres elements
      const autresItems = state.filter(element => element.id !== id);
      //fusion des 2 element & changer la pp favoris
      setState([...autresItems, {...favorisItem, favoris: !favorisItem.favoris}]);

    }
  return (
  
    <applicationContext.Provider value={{state, updateState, toggleFavoris}}>
          <section>{children}</section>
    </applicationContext.Provider>
  )
}

export default ApplicaitonContextProvider