import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Todo } from './components/Todo';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <>
      {isLoggedIn && <Todo/>}
    </>
  )
}

export default App
