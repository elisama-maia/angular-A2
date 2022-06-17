import { Component, OnInit } from '@angular/core';
import { ElisamaTasksService } from '../elisama-tasks.service';

@Component({
  selector: 'app-elisama-home',
  templateUrl: './elisama-home.component.html',
  styleUrls: ['./elisama-home.component.css'],
})
export class ElisamaHomeComponent implements OnInit {
  constructor(private elisamaTaskService: ElisamaTasksService) {}

  ngOnInit() {}

  countTask() {
    return this.elisamaTaskService.countTasks();
  }
}
