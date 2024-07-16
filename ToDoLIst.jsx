import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function ToDoList() {
    let [arr,setArr] = useState([{task : "sample-task" , id:uuidv4(), isDone : false}]);
    let [newToDo,setNewToDo] = useState("");

    let addedItem = ()=> {
        setArr((prevTodo) => {
            return [...prevTodo , {task : newToDo , id:uuidv4() , isDone : false}]
        });
    }
    let updateToDoValue = (event) => {
        setNewToDo(event.target.value);
    }
    let deletedToDoValue = (id) => {
        setArr((prevTodo) => arr.filter((prevTodo) => prevTodo.id != id));
    }
    let updatedToUppercase = () => {
        setArr( (prevToDo) => 
        prevToDo.map((toDo) => {
            return {
                ...toDo,task:toDo.task.toUpperCase()
            }
        }))
    }

    let updateUpperCaseOnly = (id) => {
        setArr((prevTodo) => 
        prevTodo.map( (toDo) => {
                if(toDo.id === id){
                    return {
                        ...toDo,task:toDo.task.toUpperCase()
                    };
                }else{
                    return toDo;
                }   
        }))
    }
    let updateLowerCaseOnly = (id) => {
        setArr( (prevTodo) => 
        prevTodo.map( (toDo) => {
            if(toDo.id === id){
                return {
                    ...toDo,task:toDo.task.toLowerCase()
                };
            }else{
                return toDo;
            }
        }))
    }

    let updatedLowerCaseAll = () => {
        setArr ( (prevTodo) => 
        prevTodo.map((toDo) => {
            return {
                ...toDo,task:toDo.task.toLowerCase()
            }
        }))
    }
    let markAsDoneOnly = (id) => {
        setArr( (prevTodo) => 
            prevTodo.map((toDo) => { 
                if(toDo.id === id){
                    return {
                        ...toDo , isDone : true
                    };
                }else{
                    return toDo;
                }
    })
        )
    }
    let marksAsDoneAll = () => {
        setArr( (prevTodo) => prevTodo.map( (toDo) => {return {
            ...toDo,isDone:true
        }}))
    }
    return (
        <div>
            <input type="text" value={newToDo} onChange={updateToDoValue} placeholder="add the tasks" /> <br />
            <button onClick={addedItem}>Add</button>
            <br />
            <br />
            <hr />

            <h2>Your Tasks</h2>
            <ul>
                {
                arr.map((todo) => {
                    return <li key={todo.id}>
                            <span style = {todo.isDone ? {textDecorationLine : "line-through"} : {}}>{todo.task}</span> &nbsp;&nbsp;&nbsp;
                            <button onClick={() => updateUpperCaseOnly(todo.id)}>UpperCase</button> &nbsp;&nbsp;&nbsp;
                            <button onClick={() => updateLowerCaseOnly(todo.id)}>LowerCase</button> &nbsp;&nbsp;&nbsp;
                            <button onClick={() => markAsDoneOnly(todo.id)} >Mark As Done</button> &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deletedToDoValue(todo.id)}>delete</button>

                        </li>
                })}
            </ul>
            <button onClick={updatedToUppercase}>UpperCase All</button>
            <button onClick={updatedLowerCaseAll}>LowerCase All</button>
            <button onClick={marksAsDoneAll}>Mark As Done All</button>
        </div>
    );
}

export default ToDoList;