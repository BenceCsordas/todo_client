import React from 'react'
//import { todosData } from '../data'


export const TodoSummary = ({todos}) => {
  console.log(todos);
  
    const hossz = todos.length
    console.log(todos.length);
    const donehossz = todos.filter(obj=>obj.comleted)

  return (
    <div className='d-flex gap-2 justify-content-between'>
      <label htmlFor="">Összesen: {hossz}</label>
      <label htmlFor="">Kész: {donehossz.length}</label>
    </div>
  )
}