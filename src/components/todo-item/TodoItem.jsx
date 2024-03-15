import React from 'react'

function TodoItem({item}) {
  return (
    <div className='bg-gray-100 rounded-sm flex items-center justify-between text-black p-3 my-2'>
      <h2>{item.title}</h2>
      {item.favorite ? (<span>&#9733;</span>) : (<span>&#9734;</span>)}

      </div>

  )
}

export default TodoItem