import React from 'react'

const Posts = () => {
  //  fetch('https://jsonplaceholder.typicode.com/todos/1')
  //  .then(response=>response.json())
  //  .then(json=>console.log(response)  )

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  return (
   <h1>Posts Page</h1>
  )
}

export default Posts