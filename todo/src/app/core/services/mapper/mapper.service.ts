import { Injectable } from '@angular/core';
import { Status } from '../../enums/Status';
import { ITask } from '../../models/Task';

@Injectable({
  providedIn: 'root'
})
export class MapperService {
  object: any;

  constructor() {
  }

  mapToTask(task: any): ITask {
    this.object = {
        id: task.id,
        userId: task.userId,
        title: task.title,
        status: task.completed ? Status.Completed : Status.New
      } as ITask;

    return this.object;
  }

}
