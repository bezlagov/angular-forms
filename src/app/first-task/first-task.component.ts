import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css']
})
export class FirstTaskComponent implements OnInit {
  email: string = '';
  password: string = '';
  result: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSend(): void {
    this.result =  JSON.stringify({ email: this.email, password: this.password });
  }
}
