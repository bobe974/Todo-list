import React from 'react'

function TodoItem({item, toggleFavoris}) {
  

  return (
    <div className='bg-gray-100 rounded-sm flex items-center justify-between text-black p-3 my-2'>
      <h2>{item.title}</h2>
      {item.favoris ? ( <button onClick={() => toggleFavoris({id: item.id})}>&#9733;</button>) 
      : (<button onClick={() => toggleFavoris({id: item.id})}>&#9734;</button>)}

      </div>

  )
}

export default TodoItem