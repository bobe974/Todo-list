import React from 'react'

function TodoItem({item}) {
  

  return (
    <div className='bg-gray-100 rounded-sm flex items-center justify-between text-black p-3 my-2'>
      <h2>{item.title}</h2>
      {item.favorite ? ( <button onClick={() => console.log("Bouton favori cliqué")}>&#9733;</button>) 
      : (<button onClick={() => console.log("CC")}>&#9734;</button>)}

      </div>

  )
}

export default TodoItem