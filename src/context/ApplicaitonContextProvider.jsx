import React from "react";
import { useReducer } from "react";
import ApplicationReducer from "./ApplicationReducer";
import { TOGGLE_FAVORIS } from "./data";

export const applicationContext = React.createContext([]);

const TASK = [
  { id: 1, favoris: false, title: "générer le projet avec vite" },
  { id: 2, favoris: false, title: "Configurer le projet" },
  { id: 3, favoris: false, title: "Créer les composants" },
  { id: 4, favoris: false, title: "Créer le contexte" },
  { id: 5, favoris: false, title: "Mettre a disposition le contexte" },
  { id: 6, favoris: false, title: "Utiliser le contexte" },
  { id: 7, favoris: false, title: "Créer un reducer" },
  { id: 8, favoris: false, title: "Dispatch des données du reducer" },
];

//créer un context qui va recevoir des fils et les transmettres via le provider a l'app
function ApplicaitonContextProvider({ children }) {
  /** Gère l'état de l'application avec une fonction réductrice et un état initial.
   /* state contient les données actuelles, `dispatch` envoie des actions à la fonction réductrice.
   **/
  const [state, dispatch] = useReducer(ApplicationReducer, TASK);

  const updateState = (newState) => {

  };

  const toggleFavoris = ({ id }) => {
    //appelle la function reductrice ApplicationReducer
    dispatch({ type: TOGGLE_FAVORIS, payload: {id} });
  };
  return (
    <applicationContext.Provider value={{ state, updateState, toggleFavoris}}>
      <section>{children}</section>
    </applicationContext.Provider>
  );
}

export default ApplicaitonContextProvider;
