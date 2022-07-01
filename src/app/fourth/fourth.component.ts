import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  form: FormGroup;
  username: FormControl;
  confirm: FormControl;
  hobbies:FormArray
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.username = new FormControl("s", Validators.required);
    this.confirm = new FormControl(false);

    this.form = this.formBuilder.group({
      username: this.username,
      confirm: this.confirm,
      hobbies: this.formBuilder.array([]),
    });

    this.hobbies = <FormArray>this.form.controls['hobbies'];
  }
  onSubmitHandler() {
    if (this.form.valid) {
      let data = { ...this.form.value }
      console.log(data);
      this.form.reset();
    }
  }

  onResetHandler() {
    console.log(this.form);

    this.form.reset();
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
