import React, { useState } from 'react';

// TaskItem component represents a single task in the to-do list
function TaskItem(props) {
    // State to track if the task is being edited
    const [isEditing, setIsEditing] = useState(false);
    // State to hold the updated task title
    const [updatedTask, setUpdatedTask] = useState(props.task.title);

    // Function to handle the task update
    const handleUpdate = () => {
        // Check if the updated task title is not just whitespace
        if (updatedTask.trim()) {
            // Call the updateTask prop function to update the task with the new title
            props.updateTask({ ...props.task, title: updatedTask });
            // Exit editing mode after updating
            setIsEditing(false);
        }
    };

    return (
        <li className="flex items-center justify-between border-b border-gray-300 py-4">
            <div className="flex-1 min-w-0">
                {isEditing ? (
                    // Input field for editing the task title when in editing mode
                    <input
                        type="text"
                        value={updatedTask} // Bind input value to updatedTask state
                        onChange={(e) => setUpdatedTask(e.target.value)} // Update state on input change
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Update task" // Placeholder for input
                    />
                ) : (
                    // Display the task title, with strikethrough for completed tasks
                    <span className={props.task.completed ? 'line-through text-gray-500' : 'text-gray-900'}>
                        {props.task.title}
                    </span>
                )}
            </div>
            <div className="flex space-x-2">
                {/* Button to toggle the completion status of the task */}
                <button
                    onClick={() => props.toggleTask(props.task.id)} // Call toggleTask with the task ID
                    className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                    Toggle
                </button>
                {isEditing ? (
                    // Button to save the updated task title when in editing mode
                    <button
                        onClick={handleUpdate} // Call handleUpdate to save changes
                        className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                        Save
                    </button>
                ) : (
                    // Button to enter editing mode
                    <button
                        onClick={() => setIsEditing(true)} // Set isEditing to true to start editing
                        className="text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                        Update
                    </button>
                )}
                {/* Button to delete the task */}
                <button
                    onClick={() => props.deleteTask(props.task.id)} // Call deleteTask with the task ID
                    className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                    Delete
                </button>
            </div>
        </li>
    );
}

export default TaskItem;
