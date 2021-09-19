import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../../models/Task';
import { TasksService } from '../../services/tasks/tasks.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  tasksList: Array<ITask>;

  constructor(
    private tasksService: TasksService
  ) {
    this.tasksList = [];
  }

  async ngOnInit(): Promise<void> {
    const userId: number = 1;
    this.tasksList = await this.tasksService.getUserTasks(userId.toString());
    
    console.log(this.tasksList);
  }
}
