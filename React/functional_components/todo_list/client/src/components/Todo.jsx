import { useState } from "react"
import React from 'react'
import Views from "../views/View"

const Todo = (props) => {
    const [task, setTask] = useState('')




    const formHandler = (event) => {
        event.preventDefault();
        let taskObj = {task, complete: false}
        console.log(taskObj)

        props.setListP([...props.tasks, taskObj] )
    }

    





console.log(props)

  return (
    <div>
        <form onSubmit={formHandler} >
            <input type="text" onChange={e => setTask(e.target.value)} />
            <br />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Todo