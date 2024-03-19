import { TOGGLE_FAVORIS, ADD_TASK } from "./data";


/**
 * Composant React utilisant useReducer pour gérer l'état de manière complexe.
 *
 * Ce composant délègue la gestion de l'état à une fonction réductrice (reducer),
 * simplifiant ainsi la logique de mise à jour de l'état.
 *
 * La fonction réductrice spécifie comment l'état doit être mis à jour en fonction des actions.
 *
 * L'état initial est défini dans la constante initialState.
 *
 * L'action est envoyée à la fonction réductrice via la méthode dispatch,
 * déclenchant ainsi la mise à jour de l'état en réponse à une action spécifique.
 */

function ApplicationReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_FAVORIS:
      const { id } = payload;
      console.log("id" + id);
      //recupere l'element en favoris
      const favorisItem = state.filter((element) => element.id === id)[0];
      //recupere les autres elements
      const autresItems = state.filter((element) => element.id !== id);
      //fusion des 2 element & changer la pp favoris
      return [
        ...autresItems,
        { ...favorisItem, favoris: !favorisItem.favoris },
      ];
      console.log("favoris etat:" + favorisItem.favoris);
    case ADD_TASK:
      const {tache} = payload;
      console.log("tache dans reducer" + tache.title);
      //ajouter dans le Provider la nouvelle tache
      return [...state, { id: state.length + 1, favoris: false, title: tache.title }];



    default:
      return state;
  }
}

export default ApplicationReducer;
