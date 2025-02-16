localStorage.clear()

const employees =[
  {
    "id": 1,
    "firstName": "Raman",
    "email": "Ramank5g@gmail.com",
    "password": "raman",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completedTask": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Fix UI Bugs",
        "taskDescription": "Resolve layout issues in the dashboard.",
        "taskDate": "2025-02-02",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failed": false
      },
      {
        "taskTitle": "Refactor CSS",
        "taskDescription": "Improve the CSS structure for maintainability.",
        "taskDate": "2025-02-03",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completedTask": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Pawan",
    "email": "pawanstr@gmail.com",
    "password": "sneharaj",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completedTask": 2,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Database Backup",
        "taskDescription": "Schedule automatic database backups.",
        "taskDate": "2025-02-05",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failed": false
      },
      {
        "taskTitle": "Resolve Server Downtime",
        "taskDescription": "Investigate and fix server outages.",
        "taskDate": "2025-02-06",
        "category": "Infrastructure",
        "active": false,
        "newTask": false,
        "completedTask": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "firstName": "sneha",
    "email": "snehastr@gmail.com",
    "password": "pawanraj",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completedTask": 3,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Social Media Strategy",
        "taskDescription": "Plan weekly social media content.",
        "taskDate": "2025-02-07",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failed": false
      },
      {
        "taskTitle": "SEO Optimization",
        "taskDescription": "Improve website SEO for better rankings.",
        "taskDate": "2025-02-08",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failed": false
      }
    ]
  }
]


  
const admin= [{
      "id": 1,
      "email": "admin@gmail.com",
      "password": "wasihaider"
    }]


export const setLocalStorage=()=>{
   localStorage.setItem('employees',JSON.stringify(employees))
   localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))
   return {employees,admin}
}




// Clear localStorage on initial load (optional)
// localStorage.clear();

// // Sample employee and admin data
// const employees = [
//   {
//     id: 1,
//     firstName: "Amit",
//     email: "amit@example.com",
//     password: "12345",
//     taskCount: {
//       active: 2,
//       newTask: 1,
//       completedTask: 1,
//       failed: 0,
//     },
//     tasks: [
//       {
//         taskTitle: "Fix UI Bugs",
//         taskDescription: "Resolve layout issues in the dashboard.",
//         taskDate: "2025-02-02",
//         category: "Development",
//         active: true,
//         newTask: true,
//         completedTask: false,
//         failed: false,
//       },
//       {
//         taskTitle: "Refactor CSS",
//         taskDescription: "Improve the CSS structure for maintainability.",
//         taskDate: "2025-02-03",
//         category: "Development",
//         active: true,
//         newTask: false,
//         completedTask: false,
//         failed: false,
//       },
//     ],
//   },
//   {
//     id: 2,
//     firstName: "Rahul",
//     email: "rahul@example.com",
//     password: "67890",
//     taskCount: {
//       active: 3,
//       newTask: 2,
//       completedTask: 4,
//       failed: 1,
//     },
//     tasks: [
//       {
//         taskTitle: "Update API Endpoints",
//         taskDescription: "Modify existing APIs for better performance.",
//         taskDate: "2025-02-03",
//         category: "Backend",
//         active: true,
//         newTask: true,
//         completedTask: false,
//         failed: false,
//       },
//       {
//         taskTitle: "Write Unit Tests",
//         taskDescription: "Ensure code coverage for authentication module.",
//         taskDate: "2025-02-04",
//         category: "Testing",
//         active: true,
//         newTask: false,
//         completedTask: false,
//         failed: false,
//       },
//     ],
//   },
//   {
//     id: 3,
//     firstName: "Sanya",
//     email: "sanya@example.com",
//     password: "abcde",
//     taskCount: {
//       active: 1,
//       newTask: 0,
//       completedTask: 3,
//       failed: 0,
//     },
//     tasks: [
//       {
//         taskTitle: "Design Homepage",
//         taskDescription: "Create an engaging homepage layout.",
//         taskDate: "2025-02-01",
//         category: "Design",
//         active: false,
//         newTask: false,
//         completedTask: true,
//         failed: false,
//       },
//       {
//         taskTitle: "Optimize Images",
//         taskDescription: "Compress images for faster loading speed.",
//         taskDate: "2025-02-02",
//         category: "Performance",
//         active: false,
//         newTask: false,
//         completedTask: true,
//         failed: false,
//       },
//     ],
//   },
//   {
//     id: 4,
//     firstName: "Vikram",
//     email: "vikram@example.com",
//     password: "98765",
//     taskCount: {
//       active: 2,
//       newTask: 1,
//       completedTask: 2,
//       failed: 1,
//     },
//     tasks: [
//       {
//         taskTitle: "Database Backup",
//         taskDescription: "Schedule automatic database backups.",
//         taskDate: "2025-02-05",
//         category: "Database",
//         active: true,
//         newTask: true,
//         completedTask: false,
//         failed: false,
//       },
//       {
//         taskTitle: "Resolve Server Downtime",
//         taskDescription: "Investigate and fix server outages.",
//         taskDate: "2025-02-06",
//         category: "Infrastructure",
//         active: false,
//         newTask: false,
//         completedTask: false,
//         failed: true,
//       },
//     ],
//   },
//   {
//     id: 5,
//     firstName: "Neha",
//     email: "neha@example.com",
//     password: "54321",
//     taskCount: {
//       active: 1,
//       newTask: 1,
//       completedTask: 3,
//       failed: 0,
//     },
//     tasks: [
//       {
//         taskTitle: "Social Media Strategy",
//         taskDescription: "Plan weekly social media content.",
//         taskDate: "2025-02-07",
//         category: "Marketing",
//         active: true,
//         newTask: true,
//         completedTask: false,
//         failed: false,
//       },
//       {
//         taskTitle: "SEO Optimization",
//         taskDescription: "Improve website SEO for better rankings.",
//         taskDate: "2025-02-08",
//         category: "Marketing",
//         active: false,
//         newTask: false,
//         completedTask: true,
//         failed: false,
//       },
//     ],
//   },
// ];

// const admin = [
//   {
//     id: 1,
//     email: "adminwasi@gmail.com",
//     password: "wasihaider",
//   },
// ];

// /**
//  * Sets default employees and admin data in localStorage
//  * Only runs if localStorage is empty to prevent overwriting data.
//  */
// export const initializeLocalStorage = () => {
//   if (!localStorage.getItem("employees")) {
//     localStorage.setItem("employees", JSON.stringify(employees));
//   }
//   if (!localStorage.getItem("admin")) {
//     localStorage.setItem("admin", JSON.stringify(admin));
//   }
// };

// /**
//  * Generic function to set data in localStorage
//  * @param {string} key - The key for localStorage
//  * @param {any} value - The value to store (converted to JSON)
//  */
// export const setLocalStorage = (key, value) => {
//   try {
//     localStorage.setItem(key, JSON.stringify(value));
//   } catch (error) {
//     console.error("Error saving data to localStorage:", error);
//   }
// };

// /**
//  * Generic function to retrieve data from localStorage
//  * @param {string} key - The key for localStorage
//  * @returns {any} - Parsed JSON data or null if not found
//  */
// export const getLocalStorage = (key) => {
//   try {
//     const data = localStorage.getItem(key);
//     return data ? JSON.parse(data) : null;
//   } catch (error) {
//     console.error("Error retrieving data from localStorage:", error);
//     return null;
//   }
// };

// /**
//  * Removes a specific item from localStorage
//  * @param {string} key - The key of the item to remove
//  */
// export const removeLocalStorage = (key) => {
//   try {
//     localStorage.removeItem(key);
//   } catch (error) {
//     console.error("Error removing data from localStorage:", error);
//   }
// };

// /**
//  * Clears all localStorage data
//  */
// export const clearLocalStorage = () => {
//   try {
//     localStorage.clear();
//   } catch (error) {
//     console.error("Error clearing localStorage:", error);
//   }
// };
