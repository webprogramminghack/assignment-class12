'use strict';

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
    // Create a list item for each task
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item'); // Optional: add a class for styling

    // Create a span for the task text
    const taskText = document.createElement('span');
    taskText.textContent = task.text;
    listItem.appendChild(taskText);

    // Create a delete button with an icon
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button'); // Optional: add a class for styling

    // Add the SVG icon as the button's background
    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'assets/svg/icon-delete.svg';
    deleteIcon.alt = 'Delete';
    deleteButton.appendChild(deleteIcon);

    // Add event listener to delete the task
    deleteButton.addEventListener('click', () => deleteTask(task.id));

    // Append the delete button to the list item
    listItem.appendChild(deleteButton);

    // Append the list item to the todo list
    todoList.appendChild(listItem);
  });
}

// Add Event listener for adding a new to-do item when the Enter key is pressed
newTaskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const taskText = newTaskInput.value;
    if (!isEmptyTask(taskText)) {
      addTask(taskText);
      newTaskInput.value = ''; // Clear the input field after adding the task
    }
  }
});
