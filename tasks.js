// use strict
import fs from 'fs';
import path from 'path';
import {v4 as uuidv4} from 'uuid';

const validStatuses = ['todo', 'in-progress', 'done'];

//Get file path where task will be stored or deleted from
const filePath = path.join(process.cwd(), 'task.json');

export function readTasks() {
    if (!fs.existsSync(filePath)) {
        return [];
    }

    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

export function writeTasks(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf8');
}

export function addTask(description) {
    const tasks = readTasks(); // Returns a list of task

    // create a new task with required properties
    const newTask = {
        id: uuidv4(),
        description: description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }

    tasks.push(newTask); // Add the new task to the lsit
    writeTasks(tasks); // Save the tasks to the Json file
    console.log(`Added task: "${description}"`);
}

export function updateTask(id, newStatus) {

    if (!validStatuses.includes(newStatus)) {
        console.log(`Invalid status. Use one of the following: ${validStatuses.join(', ')}`);
        return;
    }
    
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(task => task.id == id);

    if (taskIndex === -1) {
        console.log('Task not found');
        return;
    }

    tasks[taskIndex].status = newStatus;
    tasks[taskIndex].updatedAt = new Date().toISOString();

    writeTasks(tasks);

    console.log(`Updated task ${id} to status "${newStatus}"`);
}

export function listTasks(status = null) {
    const tasks = readTasks();

    let filteredTasks = tasks;

    if (status) {
        filteredTasks = tasks.filter(task => task.status === status);
    }

    console.log(`Listing tasks (${status || 'all'});`);
    filteredTasks.forEach (task => {
       console.log(
        `ID: ${task.id}\n` +
        `Description: ${task.description}\n` +
        `Status: ${task.status}\n` +
        `Created At: ${task.createdAt}\n` +
        `Updated At: ${task.updatedAt}\n`
       );
    });
}

export function deleteTask(id) {
    let tasks = readTasks();
    const filteredTasks = tasks.filter(task => task.id  !== id);

    if (tasks.length === filteredTasks.length) {
        console.log('Task not found');
        return;
    }

    writeTasks(filteredTasks);
    console.log(`Deleted task ${id}`);
}