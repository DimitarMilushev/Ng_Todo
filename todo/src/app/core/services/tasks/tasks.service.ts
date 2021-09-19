import { Injectable } from '@angular/core';
import { ITask } from '../../models/Task';
import { MapperService } from '../mapper/mapper.service';
import { RequestsService } from '../requests/requests.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: ITask[];
  
  constructor(
    private mapperService: MapperService,
    private requestsService: RequestsService
  ) {
    this.tasks = []
  }

  async getUserTasks(userId: string) {
    let userTasksResponse: Array<Object> = [];

    try {
      userTasksResponse = await this.requestsService.getTasksForUser(userId);
    } catch (e) {
      console.log(e);
    }
    if (userTasksResponse.length > 0) {
      this.tasks = userTasksResponse.map(t => this.mapperService.mapToTask(t));
    }

    return this.tasks;
  }

}
