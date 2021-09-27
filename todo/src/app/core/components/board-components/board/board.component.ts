import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/core/enums/Status';
import { IList } from 'src/app/core/models/List';
import { ITask } from 'src/app/core/models/Task';
import { TasksService } from 'src/app/core/services/tasks/tasks.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  tasks: Array<ITask>;
  lists: Array<IList>;


  constructor(
    private tasksService: TasksService
  ) {
    this.tasks = [];
    this.lists = [];
  }

  async ngOnInit(): Promise<void> {
    const userId: number = 1;
    this.tasks = await this.tasksService.getUserTasks(userId.toString());
    this.lists.push({
      id: '123123123',
      name: 'New',
      tasks: this.getNewTasks()
    })
    this.lists.push({
      id: '123123',
      name: 'Completed',
      tasks: this.getCompletedTasks()
    })
    console.log(this.tasks);
  }
  // drop(event: CdkDragDrop<string[]>) {
  //   console.log(event);
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }

  getNewTasks = () => this.tasks.filter(t => t.status === Status.New);

  getCompletedTasks = () => this.tasks.filter(t => t.status === Status.Completed);
}
