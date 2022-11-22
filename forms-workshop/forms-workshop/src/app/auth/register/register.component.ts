import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup = this.formBuilder.group({
    'username': new FormControl(''),
    'email': new FormControl(),
    'passwords': new FormGroup({
      'password': new FormControl(),
      'repass': new FormControl()
    }),
    tel: new FormControl()
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
