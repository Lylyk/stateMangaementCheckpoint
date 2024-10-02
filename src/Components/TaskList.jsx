import React from 'react'; // Importing React
import TaskItem from './TaskItem'; // Importing the TaskItem component

// TaskList component receives state and dispatch as props
function TaskList({ state, dispatch }) {
    // Function to toggle the completion status of a task
    const toggleTask = (taskId) => {
        dispatch({ type: 'TOGGLE_TASK', payload: taskId }); // Dispatching action to toggle task
    };

    // Function to delete a task
    const deleteTask = (taskId) => {
        dispatch({ type: 'DELETE_TASK', payload: taskId }); // Dispatching action to delete task
    };

    // Function to update a task
    const updateTask = (updatedTask) => {
        dispatch({ type: 'UPDATE_TASK', payload: updatedTask }); // Dispatching action to update task
    };

    return (
        <ul className="mt-4">
            {state.TaskList.map((task) => ( // Mapping over tasks in the state
                <TaskItem
                    key={task.id} // Unique key for each TaskItem
                    task={task} // Passing the current task to TaskItem
                    toggleTask={toggleTask} // Passing the toggleTask function
                    deleteTask={deleteTask} // Passing the deleteTask function
                    updateTask={updateTask} // Passing the updateTask function
                />
            ))}
        </ul>
    );
}

export default TaskList; // Exporting TaskList component
