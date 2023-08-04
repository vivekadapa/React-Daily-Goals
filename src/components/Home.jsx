import React from 'react';
import Task from './Task'



const Home = () => {

    const intialTasks = localStorage.getItem("Tasks") ? JSON.parse(localStorage.getItem("Tasks")) : []

    const [Tasks, setTasks] = React.useState(intialTasks);
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");



    function submitHandler(e) {
        e.preventDefault();
        setTasks([...Tasks, {
            title: title,
            description: description
        }])
        setTitle("");
        setDescription("");
    }

    function deleteTask(index) {
        const arrfilter = Tasks.filter((val, i) => {
            return i !== index;
        })
        console.log(arrfilter);
        setTasks(arrfilter);
    }

    React.useEffect(() => {
        localStorage.setItem('Tasks', JSON.stringify(Tasks));
    }, [Tasks])


    return (
        <div className='form-container'>
            <h1>Daily Goals</h1>
            <form onSubmit={submitHandler}>
                <input type="text" value={title} placeholder='title' onChange={(e) => {
                    setTitle(e.target.value);
                }} required />
                <textarea placeholder='description' value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    required
                ></textarea>
                <button type='submit'>Add Goal</button>
            </form>


            {
                Tasks.map((task, index) => (
                    <Task key={index} Title={task.title} Description={task.description} deleteTask={deleteTask} index={index} />
                ))
            }


        </div>
    )
}


export default Home;