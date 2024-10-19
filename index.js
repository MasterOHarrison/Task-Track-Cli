// use strict
import {addTask, listTasks, updateTask, deleteTask} from './tasks.js'

const args = process.argv.slice(2);
const command = args[0];
const options = args.slice(1);

switch (command) {
    case 'add':
        const taskTitle = options.join(' ');
        if (!taskTitle) {
            console.log('Please provide a task title.');
        } else {
            addTask(taskTitle);
        }
        break;

    case 'list':
        listTasks();
        break;

    case 'list-done':
        listTasks('done');
        break;

    case 'update':
        const [taskId, newStatus] = options;
        if (!taskId || !newStatus) {
            console.log('Please provide task id and new status.');
        } else {
            updateTask(taskId, newStatus);
        }
        break;

    case 'delete':
        const idToDelete = options[0];
        if (!idToDelete) {
            console.log('Please provide task id to delete.');
        } else {
            deleteTask(idToDelete);
        }
        break;

    default:
        console.log('Unknown command.');
}