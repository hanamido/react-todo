import React from 'react'; 
import ToDo from "./ToDo"; 

const ToDoList = ({toDoList}) => {
    return (
        <div>
            {/* map over toDoList object passed down as props */}
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} /> 
                )
            })}
        </div>
    );
};

export default ToDoList; 
