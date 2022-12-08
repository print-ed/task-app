import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import tasks from "../data/data";

const AddTask = () => {
    const [task, setTask] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();

        const newTask = { id: uuidv4(), title: task };
        tasks["backlog"].items.push(newTask);
        setTask("");
    };
    
    return (
        <form className='form__input' onSubmit={handleAddTodo}>
            <label htmlFor='task'>Add Task</label>
            <input
                type='text'
                name='task'
                id='task'
                value={task}
                className='input'
                required
                onChange={(e) => setTask(e.target.value)}
            />
            <button className='addTodoBtn'>ADD TASK</button>
        </form>
    );
};

export default AddTask;