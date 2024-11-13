import React from "react"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"


const employeeData = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "emp@gmail.com",
        "password": "123",
        "tasksCount": {
            "activeTasks": 2,
            "newTasks": 1,
            "completedTasks": 3,
            "failedTasks": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Project Kickoff",
                "taskDescription": "Initiate the new project with team briefing. Review the latest code changes from the development team. Migrate the old database to the new system. Migrate the old database to the new system. ",
                "taskDate": "2024-10-01",
                "category": "Project Management"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Team Meeting",
                "taskDescription": "Discuss project milestones and next steps. Migrate the old database to the new system. Migrate the old database to the new system. Migrate the old database to the new system.",
                "taskDate": "2024-10-03",
                "category": "Project Management"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client Feedback Session",
                "taskDescription": "Gather feedback from the client on the latest deliverables.",
                "taskDate": "2024-09-28",
                "category": "Client Relations"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Follow-up Call",
                "taskDescription": "Follow up with the client regarding previous feedback.",
                "taskDate": "2024-10-05",
                "category": "Client Relations"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Draft Proposal",
                "taskDescription": "Draft a proposal based on the client's feedback.",
                "taskDate": "2024-10-10",
                "category": "Client Relations"
            }
        ]
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "password": "password456",
        "tasksCount": {
            "activeTasks": 1,
            "newTasks": 1,
            "completedTasks": 0,
            "failedTasks": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Code Review",
                "taskDescription": "Review the latest code changes from the development team.",
                "taskDate": "2024-10-02",
                "category": "Development"
            }
        ]
    },
    {
        "id": 3,
        "name": "Mark Brown",
        "email": "mark.brown@example.com",
        "password": "password789",
        "tasksCount": {
            "activeTasks": 2,
            "newTasks": 0,
            "completedTasks": 1,
            "failedTasks": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client Feedback Session",
                "taskDescription": "Gather feedback from the client on the latest deliverables.",
                "taskDate": "2024-09-28",
                "category": "Client Relations"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Follow-up Call",
                "taskDescription": "Follow up with the client regarding previous feedback.",
                "taskDate": "2024-10-05",
                "category": "Client Relations"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Draft Proposal",
                "taskDescription": "Draft a proposal based on the client's feedback.",
                "taskDate": "2024-10-10",
                "category": "Client Relations"
            }
        ]
    },
    {
        "id": 4,
        "name": "Lisa Johnson",
        "email": "lisa.johnson@example.com",
        "password": "password101",
        "tasksCount": {
            "activeTasks": 1,
            "newTasks": 1,
            "completedTasks": 0,
            "failedTasks": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Database Migration",
                "taskDescription": "Migrate the old database to the new system.",
                "taskDate": "2024-10-05",
                "category": "IT Operations"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "System Testing",
                "taskDescription": "Conduct tests on the new database system.",
                "taskDate": "2024-10-12",
                "category": "IT Operations"
            }
        ]
    },
    {
        "id": 5,
        "name": "Tom Wilson",
        "email": "tom.wilson@example.com",
        "password": "password202",
        "tasksCount": {
            "activeTasks": 1,
            "newTasks": 1,
            "completedTasks": 0,
            "failedTasks": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Marketing Strategy Meeting",
                "taskDescription": "Discuss and outline the upcoming marketing strategies.",
                "taskDate": "2024-10-10",
                "category": "Marketing"
            }
        ]
    },
    {
        "id": 6,
        "name": "Sara Davis",
        "email": "sara.davis@example.com",
        "password": "password303",
        "tasksCount": {
            "activeTasks": 1,
            "newTasks": 0,
            "completedTasks": 1,
            "failedTasks": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Budget Review",
                "taskDescription": "Review and approve the annual budget.",
                "taskDate": "2024-09-25",
                "category": "Finance"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Expense Report",
                "taskDescription": "Compile and submit the expense report for the quarter.",
                "taskDate": "2024-10-15",
                "category": "Finance"
            }
        ]
    },
    {
        "id": 7,
        "name": "Chris Martin",
        "email": "chris.martin@example.com",
        "password": "password404",
        "tasksCount": {
            "activeTasks": 1,
            "newTasks": 1,
            "completedTasks": 1,
            "failedTasks": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Team Building Exercise",
                "taskDescription": "Plan and execute a team-building event.",
                "taskDate": "2024-10-15",
                "category": "HR"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Feedback Collection",
                "taskDescription": "Collect feedback from participants of the last team-building event.",
                "taskDate": "2024-09-30",
                "category": "HR"
            }
        ]
    },
    {
        "id": 8,
        "name": "Kelly Thomas",
        "email": "kelly.thomas@example.com",
        "password": "password505",
        "tasksCount": {
            "activeTasks": 0,
            "newTasks": 0,
            "completedTasks": 1,
            "failedTasks": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "System Update",
                "taskDescription": "Update the company's software systems.",
                "taskDate": "2024-10-08",
                "category": "IT Operations"
            }
        ]
    },
    {
        "id": 9,
        "name": "David Jones",
        "email": "david.jones@example.com",
        "password": "password606",
        "tasksCount": {
            "activeTasks": 1,
            "newTasks": 1,
            "completedTasks": 0,
            "failedTasks": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Sales Presentation",
                "taskDescription": "Prepare the presentation for the upcoming sales pitch.",
                "taskDate": "2024-10-12",
                "category": "Sales"
            }
        ]
    },
    {
        "id": 10,
        "name": "Anna White",
        "email": "anna.white@example.com",
        "password": "password707",
        "tasksCount": {
            "activeTasks": 1,
            "newTasks": 0,
            "completedTasks": 0,
            "failedTasks": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Website Redesign",
                "taskDescription": "Complete the redesign of the company website.",
                "taskDate": "2024-10-20",
                "category": "Design"
            }
        ]
    }
];

const adminData = {
    "id": 1,
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "adminPassword123"
};



//set employees data in browsers local storage
export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employeeData))
    localStorage.setItem('admin', JSON.stringify(adminData))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin')); 
  return {employees, admin}
}
  
  