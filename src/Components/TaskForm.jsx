import React, { useState } from 'react'; // Importing React and useState hook

// TaskForm component receives addTask and toggleFormVisibility as props
function TaskForm({ addTask, toggleFormVisibility }) {
    const [newTask, setNewTask] = useState(''); // State to manage the new task input

    // Handle input changes
    function handleInputChange(e) {
        setNewTask(e.target.value); // Update the newTask state with input value
    }

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault(); // Prevents the default form submission behavior (page reload)
        if (newTask.trim()) { // Validate to ensure task name is not just whitespace
            const task = {
                id: Date.now(), // Unique ID based on current timestamp
                title: newTask, // Task title from input
                completed: false, // Initial state of the task is not completed
            };
            addTask(task); // Call addTask to dispatch the new task
            setNewTask(''); // Clear the input field for new entry
            toggleFormVisibility(); // Hide the form after adding the task
        }
    }

    return (
        <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
                <input
                    value={newTask} // Controlled input with value from newTask state
                    onChange={handleInputChange} // Handle input changes
                    type="text" // Input type is text
                    name="task_input" // Input name
                    id="task_input" // Input ID
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Enter a task" // Placeholder text
                    required // Input is required
                />
                <label
                    htmlFor="task_input" // Label associated with input
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Task 
                </label>
            </div>

            <button
                type="submit" // Submit button
                className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
                Add Task 
            </button>

            <button
                type="button" // Cancel button that doesn't submit the form
                onClick={toggleFormVisibility} // Hide form when clicked
                className="mt-2 ml-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
                Cancel 
            </button>
        </form>
    );
}

export default TaskForm; // Exporting TaskForm component
