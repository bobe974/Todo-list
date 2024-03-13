
import React from 'react'
import TodoEdit from './components/todo-edit/TodoEdit'
import TodoList from './components/todo-list/TodoList'

function AppBody() {
  
  return (
    <section className='bg-orange-600 h-screen'>
      <div className='container grid md:grid-cols-2 gap-6'>
        <TodoEdit/>    
        <TodoList/>
      </div>
    </section>
  )
}

export default AppBody
