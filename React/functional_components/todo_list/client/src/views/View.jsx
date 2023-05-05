import { useState } from 'react'
import React from 'react'
import Todo from "../components/Todo"

const View = () => {
    let [listOfTasks, setListOfTasks] = useState([])



    const cross = (e,i) => {
        const tempList = [...listOfTasks]
        tempList[i].complete = e.target.checked
        console.log(tempList[i].complete)
        setListOfTasks(tempList)
        console.log(listOfTasks[i])
    }

    const deleteT = (i) => {
        let forDelete = listOfTasks.splice(i,1)
        listOfTasks = listOfTasks.filter(item => item !== forDelete)
        setListOfTasks(listOfTasks)
    }


  return (
    <div>
        <Todo setListP = {setListOfTasks}   tasks = {listOfTasks} />
        <div>
            {
                listOfTasks.map((t,i) => {
                    return (
                        <div>
                            <p style={t.complete ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{t.task}</p>
                            <input checked={t.complete} onChange={(e) => cross(e,i)} type="checkbox" />
                            <button onClick={() => deleteT(i)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default View