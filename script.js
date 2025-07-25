// Select the input box, button, and the task list
const input = document.getElementById('taskInput');
const button = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add a click event listener to the button
button.addEventListener('click', function() {
  const taskText = input.value.trim();  // Get trimmed input value
  
  if (taskText !== '') {
    const li = document.createElement('li');  // Create new <li>
    li.textContent = taskText;                 // Set task text
    taskList.appendChild(li);                   // Add <li> to <ul>
    input.value = '';                           // Clear input box
  } else {
    alert('Please enter a task.');              // Alert if empty
  }
});
