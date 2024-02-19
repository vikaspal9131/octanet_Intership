document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("task-input");
  const tasksContainer = document.getElementById("tasks-container");

  taskInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter" && taskInput.value.trim() !== "") {
          const taskText = taskInput.value.trim();
          const taskItem = createTaskItem(taskText);
          tasksContainer.appendChild(taskItem);
          taskInput.value = "";
      }
  });

  function createTaskItem(taskText) {
      const taskItem = document.createElement("div");
      taskItem.classList.add("task-item");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function() {
          taskText.style.textDecoration = this.checked ? "line-through" : "none";
      });

      const taskLabel = document.createElement("label");
      taskLabel.textContent = taskText;

      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskLabel);

      return taskItem;
  }
});
