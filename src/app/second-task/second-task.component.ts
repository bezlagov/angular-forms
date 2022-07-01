import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css']
})
export class SecondTaskComponent implements OnInit {

  result: string = '';

  myForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email:new FormControl("", [Validators.required, Validators.email]),
      password:new FormControl("", [Validators.required, Validators.minLength(4)]),
    });
  }

  onSubmit(form:FormGroup) {
    console.log(form);
    this.result = JSON.stringify(form.value);
  }
}
