import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit,AfterViewInit {

  info = {
    email: '',
    userName: '',
    password: ''
  }

  info2 = {
    email: '',
    password: ''
  }
  toggleSignup = false;

  registerForm: FormGroup;
  @ViewChild('tag') inputElement: ElementRef<any>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngAfterViewInit() {
  console.log('InputElement',this.inputElement.nativeElement.value);
  }

  get f() { return this.registerForm.controls; }

  // register(form: NgForm) {
  //   console.log(form.controls['email'].value);
  //   console.log(form.controls['userName'].value);
  //   console.log(form.controls['password'].value);

  // }

  // reset(registerForm: NgForm) {
  //   registerForm.form.reset();
  // }

register(){
// console.log(this.registerForm);
    console.log(this.registerForm.controls['email'].value);
    console.log(this.registerForm.controls['userName'].value);
    console.log(this.registerForm.controls['password'].value);
}

reset(){
this.registerForm.reset();
}

}
