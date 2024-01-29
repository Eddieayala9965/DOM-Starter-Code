"use strict";

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM Ready");

  const todoForm = document.querySelector("#to-do");

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskInput = document.querySelector('input[name="taskEntry"]');
    console.log(taskInput.value);
    generateList(taskInput);
  });
});

const generateList = (taskInput) => {
  // get list
  const taskList = document.querySelector("#task-list");
  // gen a li list
  const taskElement = document.createElement("li");
  // put inner HTMl cuz we want to append the list
  taskElement.textContent = taskInput;
  taskList.appendChild(taskElement);
  clearInput(taskInput);
};

const clearInput = (input) => {
  return (input.value = "");
};
