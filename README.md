# Task Tracker CLI
Task Tracker CLI is a simple command line interface (CLI) application built with Node.js to help you manage your tasks. This app allows you to add tasks, update their status, delete tasks, and list tasks based on their current state. Tasks are stored in a tasks.json file and contain properties like unique IDs, descriptions, status, and timestamps for when they were created and updated.

## Features
Add new tasks with a description.
Update task status to "todo", "in-progress", or "done".
Delete tasks by their unique ID.
List all tasks, only completed tasks, in-progress tasks, or tasks yet to be done.
Persistent storage using a JSON file.

## Task Properties
Each task has the following properties:

id: A unique identifier for the task (UUID).
description: A short description of the task.
status: The status of the task, which can be:
**    todo
    in-progress
    done**
createdAt: The date and time when the task was created.
updatedAt: The date and time when the task was last updated.

## Usage
Commands
1. Add a Task
To add a new task, use the add command followed by the task description:

bash
node index.js add "Your task description"
Example:

bash
node index.js add "Finish building the CLI application"
2. List All Tasks
To list all tasks (regardless of status):

bash
node index.js list
3. List Tasks by Status
You can filter tasks by their status using specific commands:

List completed tasks:

bash
node index.js list-done
List tasks in progress:

bash
node index.js list-inprogress
List tasks that are not yet done:

bash
node index.js list-notdone
4. Update Task Status
To update a task's status, use the update command followed by the task ID and the new status (todo, in-progress, or done):

bash
node index.js update <task-id> <new-status>
Example:

bash
node index.js update 1 done
This updates the task with ID 1 to the status done.

5. Delete a Task
To delete a task, use the delete command followed by the task ID:

bash
node index.js delete <task-id>
Example:

bash
node index.js delete 1
This deletes the task with ID 1 from the list.

Example Task Structure
Tasks are stored in a tasks.json file in the root of the project. Each task is an object with the following structure:

json
{
  "id": "uuid-v4-string",
  "description": "Your task description",
  "status": "todo",  // Can be 'todo', 'in-progress', or 'done'
  "createdAt": "2024-10-19T10:30:00.000Z",
  "updatedAt": "2024-10-19T10:30:00.000Z"
}

## Error Handling
If you try to update a task with an invalid status, the app will display an error message.
If you attempt to delete or update a task with an ID that doesn't exist, you will get a "Task not found" message.
Enhancements
Feel free to enhance this project by adding features such as:

Sorting tasks by createdAt or updatedAt.
Searching tasks by description.
Adding more detailed validations and error handling.

## License
This project is licensed under the MIT License. Feel free to use and modify it as you like.

