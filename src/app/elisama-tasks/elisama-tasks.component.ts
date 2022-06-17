import { Component, OnInit } from '@angular/core';
import { ElisamaTasksService } from '../elisama-tasks.service';

@Component({
  selector: 'app-elisama-tasks',
  templateUrl: './elisama-tasks.component.html',
  styleUrls: ['./elisama-tasks.component.css'],
})
export class ElisamaTasksComponent implements OnInit {
  task = '';

  constructor(private elisamaTaskService: ElisamaTasksService) {}

  ngOnInit() {}

  addTask() {
    this.elisamaTaskService.addTask(this.task);
  }

  removeTask(index: number) {
    this.elisamaTaskService.removeTask(index);
  }

  showTasks() {
    return this.elisamaTaskService.showTasks();
  }
}
