import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-demo',
  templateUrl: './reactive-forms-demo.component.html',
  styleUrls: ['./reactive-forms-demo.component.css']
})
export class ReactiveFormsDemoComponent implements OnInit {

  operatingSystems: string[] = [
    'Windows 10',
    'Linux',
    'Mac OS'
  ]

  laptopGroup: FormGroup = this.formBuilder.group({
    processor: new FormControl(''),
    ram: new FormControl(''),
    hardDisk: new FormControl(),
    os: new FormControl()
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

}
