// Initial state of the application
export let initialState = {
    TaskList: [
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: false },
        { id: 3, title: "Task 3", completed: false },
    ],
};

// Reducer function to manage state changes based on dispatched actions
export const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_STATE": // Load tasks from the payload into state
            return { ...state, TaskList: action.payload };

        case "ADD_TASK":
            // Add a new task to the TaskList
            return { 
                ...state, 
                TaskList: [...state.TaskList, action.payload] 
            };

        case "TOGGLE_TASK":
            // Toggle the completion status of a task
            return {
                ...state,
                TaskList: state.TaskList.map(task => 
                    task.id === action.payload 
                        ? { ...task, completed: !task.completed } // Toggle completion
                        : task // Return the task unchanged
                ),
            };

        case "DELETE_TASK":
            // Remove a task from the TaskList
            return {
                ...state,
                TaskList: state.TaskList.filter(task => task.id !== action.payload), // Filter out the deleted task
            };

        case "UPDATE_TASK":
            // Update the title of a task
            return {
                ...state,
                TaskList: state.TaskList.map(task => 
                    task.id === action.payload.id 
                        ? { ...task, title: action.payload.title } // Update the title
                        : task // Return the task unchanged
                ),
            };

        default:
            // Return the current state if action type is not recognized
            return state;
    }
};
