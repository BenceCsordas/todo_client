import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { FaTrashAlt } from "react-icons/fa";
//import { todosData } from '../data';
export const NewTodo = ({handleAdd}) => {


    const [task, setDescr] = useState("")

    console.log("Renderelődik a NewTodo: ",task);
    
    const handleSubmit=()=>{
        handleAdd(task)
        setDescr("")
    }
    

    return (
        
        <div>

            <Form style={{display:'flex', gap:"5px", maxWidth:"600px"}}>
                <FormGroup style={{flex:1}}>
                    <Input
                        placeholder="new item"
                        type="text"
                        value={task}
                        onChange={(e)=>setDescr(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Button onClick={handleSubmit} disabled={!task}>Add</Button>    
                    
                </FormGroup>
            </Form>
        </div>

    )
}