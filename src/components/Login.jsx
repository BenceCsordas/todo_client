import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export const Login = ({setIsLoggedIn}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(username, password)
        import.meta.env.VITE_USERNAME == username && import.meta.env.VITE_PW == password ? setIsLoggedIn(true) : setIsLoggedIn(false) 
    }

    return (
        <Form className='shadow' style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", maxWidth:"fit-content", padding:"20px", borderRadius:"10px", margin:"0 auto"}}>
            <h3>My Todos</h3>
            <FormGroup>
                <Input   
                    placeholder="Username"
                    type="text"
                    value={username}
                onChange={(e)=>setUsername(e.target.value)}/>
            </FormGroup>
            {' '}
            <FormGroup>
                <Label
                    for="password"
                    hidden
                >
                    Password
                </Label>
                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </FormGroup>
            {' '}
            <Button onClick={handleSubmit}>
                Login
            </Button>
        </Form>
    )
}


