import './App.css'; // Importing the main CSS file for styles
import { useState, useReducer, useEffect } from 'react'; // Importing React hooks for state management
import TaskForm from './Components/TaskForm'; // Importing the TaskForm component
import TaskList from './Components/TaskList'; // Importing the TaskList component
import { initialState, reducer } from './Reducer'; // Importing the initial state and reducer function

function App() {
    // State to control the visibility of the task form
    const [isFormVisible, setIsFormVisible] = useState(false);
    
    // Load tasks from localStorage if available
    const loadTasksFromLocalStorage = () => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            return JSON.parse(storedTasks); // Parse and return tasks from localStorage
        }
        return initialState.TaskList; // Return initial tasks if none found
    };

    // State management using the useReducer hook
    const [state, dispatch] = useReducer(reducer, { TaskList: loadTasksFromLocalStorage() });

    // Effect to save tasks to localStorage whenever TaskList changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(state.TaskList));
    }, [state.TaskList]);

    // Function to toggle the visibility of the task form
    const toggleFormVisibility = () => {
        setIsFormVisible((prev) => !prev); // Toggle the form visibility state
    };

    // Function to add a new task
    const addTask = (newTask) => {
        // Dispatch an action to add a new task
        dispatch({ type: 'ADD_TASK', payload: newTask });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
                <div className="flex justify-start mb-4">
                    <button
                        type="button"
                        onClick={toggleFormVisibility} // Toggle form visibility on button click
                        className="mt-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                        New Task
                    </button>
                </div>
                {/* Render the TaskForm component if the form is visible */}
                {isFormVisible && <TaskForm toggleFormVisibility={toggleFormVisibility} addTask={addTask} />}
                {/* Render the TaskList component, passing in state and dispatch for managing tasks */}
                <TaskList state={state} dispatch={dispatch} /> {/* Pass state and dispatch */}
            </div>
        </div>
    );
}

export default App; // Export the App component
