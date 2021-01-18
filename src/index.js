document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener('submit', (event) => {
    event.preventDefault()
    let task = event.target
    addTask(task)
  })

});

function addTask(formData) {

  let taskList = document.getElementById("tasks")

  let taskBlock = document.createElement('li')
    taskBlock.innerText = formData.newTaskDescription.value
    if (formData.taskPriority.value == "high") {
      taskBlock.style = "color:red"
      taskBlock.class = "highTask"
    } else if (formData.taskPriority.value == "medium") {
      taskBlock.style = "color:yellow"
      taskBlock.class = "mediumTask"
    } else if (formData.taskPriority.value == "low") {
      taskBlock.style = "color:green"
      taskBlock.class = "lowTask"
    }

  let deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Delete"
    deleteBtn.addEventListener('click', () => {
      deleteBtn.parentNode.remove()
    })

  taskBlock.appendChild(deleteBtn)
  taskList.appendChild(taskBlock)
}
