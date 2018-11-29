"use strict";

// Model
class Todo {
  constructor(title, date) {
    Todo.nextId++;
    this.id = Todo.nextId; // auto_increment
    this.title = title;
    this.completed = false;
    this.date = date;
  }
}
Todo.nextId = 0;
// Service
class TodosService {
  /**
   * Constructor
   */
  constructor() {
    this.records = [];
  }
  /**
   * this is used to add a new ToDo Item
   * @param {*} title title of the ToDo item
   */
  addTodo(title) {
    records.push(new Todo(title, new Date()));
  }

  /**
   * this is used to modify the todo item title
   * @param {*} id identifier of the item to modify
   * @param {*} newTitle new title
   */
  editTodo(id, newTitle) {
    records.find(function (todo, index) {
      return todo.id === id
    }).title = newTitle;
  }

  /**
   * method to Mark a specified todo Item as COMPLETED.
   * @param {*} id identifier of  the todo item to mark as COmplete.
   * This will set the completed flag and set the date attribute to system date
   */
  completeTodo(id) {
    records.find(function (todo, index) {
      return todo.id === id
    }).completed = true;
  }

  /**
   * this is used to Mark ALL Todo Items as COMPLETE.
   */
  completeAll() {
    records.forEach(function (todo, index) {
      todo.completed = true
    });
  }
  deleteTodo(id) {
    records.find(function (todo, index) {
      if (todo.id === id) {
        records.splice(index, 1);
      }
    });
  }

  /**
   * this is used to reset the COMPLETED Flag for ALL Items
   */
  clearCompleted() {
    records.forEach(function (todo, index) {
      todo.completed = false
    });
  }

  /**
   * this is used to filter the todo items on basis of 'completed' flag 
   * @param {*} filter if true, return only completed items, else non-completed items 
   */
  viewTodos(filter) {
    return this.results.reduce((acc, curr) => {
      switch (filter) {
        case "completed":
          if (curr.completed) acc.push(curr);
          break;
        case "not completed":
          if (!curr.completed) acc.push(curr);
          break;
        default:
          throw new Error("Un supported filter");
      }
      return acc;
    }, [])
  }
}

/**
 * INstantiate the Service API
 */
const service = new TodosService();