# To-Do List with JavaScript and DOM Manipulation

## Objective

The objective of this assignment is to learn how to manipulate the DOM using JavaScript. You will create a simple to-do list application that allows users to add new tasks by pressing the Enter key and delete tasks using a delete icon.

## Instructions

### Step 1: Understand the Provided Code

You are provided with an initial JavaScript code file that includes:

- Functions to **add** and **delete** tasks.
- A function to **generate unique IDs** for each task.
- A **render function** to display tasks on the page.
- An event listener for the **Enter key** to add new tasks.

You need to complete the missing parts of the JavaScript code to make the to-do list fully functional.

### Step 2: HTML Structure

Make sure your HTML structure matches the provided image layout:

![To-Do List Layout](https://imgtr.ee/images/2024/09/03/8f84da3b2d0c4461315c9fc3c338881a.png)

Your HTML should contain:

- An input field with the class `.new-task` where users can type new tasks.
- An unordered list with the class `.todo-list` where tasks will be displayed.

### Step 3: Complete the JavaScript Code

#### Initial Code (for students to start with):

```javascript
'use strict';

// ------------- don't change the code unless you see "start coding here" ----------------

// Select the input field and the to-do list
const newTaskInput = document.querySelector('.new-task');
const todoList = document.querySelector('.todo-list');

// Function to generate a unique ID for each task
function generateUniqueId() {
  return '_' + Math.random().toString(36).slice(2, 11);
}

// Array to store the to-do items with unique IDs
let tasks = [];

// Function to add a new to-do item to the array
function addTask(taskText) {
  const task = {
    id: generateUniqueId(),
    text: taskText,
  };
  tasks.push(task);
  render();
}

// Function to delete a to-do item by its ID
function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  render();
}

function isEmptyTask(taskText) {
  return taskText.trim() === '';
}

// Function to render the to-do list
function render() {
  todoList.innerHTML = '';

  // Render each task from the array
  tasks.forEach((task) => {
    // start coding here
  });
}

// add Event listener for adding a new to-do item when the Enter key is pressed
// use the isEmptyTask function to check if the input field is empty, if it's empty, don't add a new task
// use .value to get the value of the input field
// clear the input field after adding a new task
newTaskInput.addEventListener('keypress', function (e) {
  // start coding here
});
```
