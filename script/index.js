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
    const li = document.createElement('li');
    li.textContent = task.text;
    li.dataset.id = task.id;

    // create a delete  button
    const deleteButton = document.createElement('img');
    deleteButton.src = './assets/svg/icon-delete.svg';
    // Path ke ikon delete

    //deleteButton.alt = 'Delete';
    //deskripsi gambar
    deleteButton.style.cursor = 'pointer';
    //mengubah kursor saat hover

    //menambahkan event listener untuk menghapus tugas
    deleteButton.addEventListener('click', () => deleteTask(task.id));

    //menambahkan elemen gambar ke dalam list item

    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

// add Event listener for adding a new to-do item when the Enter key is pressed
// use the isEmptyTask function to check if the input field is empty, if it's empty, don't add a new task
// use .value to get the value of the input field
// clear the input field after adding a new task
newTaskInput.addEventListener('keypress', function (e) {
  // start coding here
  if (e.key === 'Enter') {
    const taskText = newTaskInput.value;
    if (!isEmptyTask(taskText)) {
      addTask(taskText);
      newTaskInput.value = '';
      // clear the input field
    }
  }
});
