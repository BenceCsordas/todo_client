export const randNr = (min, max)=>{
    return Math.floor(Math.random()*(max-min+1))+min
}

import axios, { all } from "axios"

const baseUrl = "https://todo-server-ten-puce.vercel.app/todos" /*"http://localhost:8000/"*/

//összes adat lekérése
export const getTodos = async (setTodos) => {
    const resp = await axios.get(baseUrl)
    setTodos(resp.data)
}

//todo törlése
export const deleteTodo = async (id) => {
    const url = `${baseUrl}/${id}`
    console.log(url);
    await axios.delete(url)
}

//új hozzáadása
export const addTodo = async (task) => {
    await axios.post(baseUrl, {task})
}

export const doneTodo = async (id) => {
    await axios.patch(`${baseUrl}/${id}`)
}

export const deleteAllTodo = async () => {    
    await axios.delete(`${baseUrl}delall`)
}