/ Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
    taskInput.value = '';

    // Add event listener to toggle completed status
    taskItem.addEventListener('click', function () {
      taskItem.classList.toggle('completed');
    });
  }
}

// Add event listener to the add button
addBtn.addEventListener('click', addTask);
