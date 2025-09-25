import React, { useState } from 'react'
//import { todosData } from '../data'
import { ListGroup, ListGroupItem, Spinner } from 'reactstrap'
import { FaTrashAlt } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
import { NewTodo } from './NewTodo';
import { TodoSummary } from './todoSummary';
import { useEffect } from 'react';
import { deleteTodo, getTodos, addTodo, doneTodo, deleteAllTodo } from '../utils';



export const Todo = () => {
  const [todos, setTodos] = useState(null)

  useEffect(()=>{
    getTodos(setTodos)
  },[]) // az üres függőségi tömb azt jelzi, hogy cska egyszer fut le a függvény amikor betöltődik az oldal



/*  

  const handleDelete = (id) => {
    //console.log(id);
    setTodos(prev => prev.filter(obj => obj.id != id))
  }

  const handleDone = (id) => {
    //console.log("Handle Done függvény ", id);
    setTodos(prev=>prev.map(obj=>obj.id == id ? {...obj,comleted:!obj.comleted}:obj))  
  }

  const handleAdd = (desc) =>{
    const newTodo={
      id: Date.now(),
      desc,
      comleted:false
    }
    setTodos(prev=>[...prev, newTodo])
  }

  const handleDeleteAll = ()=>{
    setTodos(prev => prev.filter(obj=>!obj))
  }

*/

const handleDelete = async (id)=>{
  await deleteTodo(id)//az adatbázisban megtörténik a módosítás
  getTodos(setTodos)
}
const handleDeleteAll = async ()=>{
  await deleteAllTodo()
  getTodos(setTodos)
}

const handleAdd = async (task) =>{
  await addTodo(task)//az adatbázisban megtörténik a módosítás
  getTodos(setTodos)
}

const handleDone = async (id)=>{
  await doneTodo(id)
  getTodos(setTodos)
} 

  return (
    <div style={{maxWidth:"600px", margin:"auto"}} className=''>
      <NewTodo handleAdd={handleAdd}/>
      {/*<FaTrashAlt style={{ color: "red", fontSize: "3rem" }} onClick={() => handleDeleteAll()} />*/}
      <ListGroup>
        {!todos && <Spinner style={{color:"red"}}/>}
        {todos && todos.map(obj =>
          <ListGroupItem key={obj.id} className='d-flex justify-content-between'>
            <MdFileDownloadDone style={{ color: obj.comleted ? "lightgreen" : "gray", fontSize: "2rem" }} onClick={() => handleDone(obj.id)} />
            <div style={{ textDecoration: obj.comleted ? "line-through" : "none" }}>
              {obj.task}
            </div>
            <FaTrashAlt style={{ color: "red", fontSize: "2rem" }} onClick={() => handleDelete(obj.id)} />
          </ListGroupItem>
        )}
      </ListGroup>
      {todos && <TodoSummary todos={todos}/>}

    </div>

  )
}