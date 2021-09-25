import { Component, Input, OnInit } from '@angular/core';
import { Status } from '../../enums/Status';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() title: string;
  @Input() status: Status;
  date: Date;

  constructor() {
    this.title = '';
    this.status = Status.New;
    this.date = new Date;
   }

  ngOnInit(): void {
  }

}
