import React from 'react';

const Task = ({Title,Description,deleteTask,index})=>{
    return (
        <div className='Task'>
            <div>
                <p>{Title}</p>
                <span>{Description}</span>
            </div>
            <button onClick={()=>deleteTask(index)}>Remove</button>
        </div>
    )
}


export default Task;