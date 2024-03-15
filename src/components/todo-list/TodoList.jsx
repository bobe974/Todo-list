import React, { useContext } from 'react'
import TodoItem from '../todo-item/TodoItem'
import { applicationContext } from '../../context/ApplicaitonContextProvider'

function TodoList() {
  //récupere le contexte
  const {state, toggleFavoris} = useContext(applicationContext);

  return (
    <section>
        {state.map(item => <TodoItem item = {item}  key={item.id} toggleFavoris = {toggleFavoris}/>)}
    </section>    
  )
}

export default TodoList