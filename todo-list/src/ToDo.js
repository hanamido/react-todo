import React from 'react';

// ToDo component: each task to do
const ToDo = ({todo}) => {
    return (
        // strike through completed tasks
        <div className={todo.complete ? "strike" : ""}>
            {todo.task}
        </div>
    );
};

export default ToDo; 