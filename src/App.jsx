import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Todo } from './components/Todo';
import { Login } from './components/Login';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div style={{padding:"5px"}} className='AppBox'>
      {isLoggedIn ? <Todo setIsLoggedIn={setIsLoggedIn}/> : <Login setIsLoggedIn={setIsLoggedIn}/>}
    </div>
  )
}

export default App
