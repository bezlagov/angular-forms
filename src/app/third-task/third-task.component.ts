import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-third-task',
  templateUrl: './third-task.component.html',
  styleUrls: ['./third-task.component.css']
})
export class ThirdTaskComponent implements OnInit {

  form: FormGroup;
  hobbies: FormArray;
  username: FormControl;
  confirm: FormControl;

  constructor() { }

  ngOnInit(): void {

    this.hobbies = new FormArray([new FormControl("First hobbie ")]);
    this.username = new FormControl("s", Validators.required);
    this.confirm = new FormControl(false);

    this.form = new FormGroup({
      username: this.username,
      confirm: this.confirm,
      hobbies: this.hobbies,
    });
  }
  
  onSubmitHandler() {
    if (this.form.valid) {
      let data = { ...this.form.value }
      console.log(data);
      this.form.reset();
    }
  }

  onResetHandler() {
    this.form.reset();
    this.hobbies.clear();
  }

  clearItems() {
    this.hobbies.clear();
  }

  addItem(input) {
    if (input.value == "") {
      return;
    }
    this.hobbies.push(new FormControl(input.value));
    input.value = "";
  }
}
