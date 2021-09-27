import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {

  @Input() text: string;
  constructor() {
    this.text = '';
   }

  ngOnInit(): void {
  }

}
