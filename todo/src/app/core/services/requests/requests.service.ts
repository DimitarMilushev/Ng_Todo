import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor() { }

  async getTasksForUser(userId: string): Promise<Array<Object>> {
    const response: Response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
    if (!response.ok) {
      throw new Error(`Error code: ${response.status}\n${response.statusText}`);
    }

    return response.json();
  }
}
