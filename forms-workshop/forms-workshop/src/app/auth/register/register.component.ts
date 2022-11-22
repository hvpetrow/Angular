import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup = this.formBuilder.group({
    'username': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    'email': new FormControl(null, [Validators.required, emailValidator]),
    'passwords': new FormGroup({
      'password': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'repass': new FormControl(null, Validators.required,)
    }),
    'tel': new FormControl(null, [])
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerFormGroup.value);

  }

}
