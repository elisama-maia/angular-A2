import { Injectable } from '@angular/core';

@Injectable()
export class ElisamaTasksService {
  tasksList = [];

  constructor() {}

  addTask(task: string) {
    this.tasksList.push(task);
  }

  removeTask(index: number) {
    this.tasksList.splice(index, 1);
  }

  showTasks() {
    return this.tasksList;
  }

  countTasks() {
    return this.tasksList.length;
  }
}
