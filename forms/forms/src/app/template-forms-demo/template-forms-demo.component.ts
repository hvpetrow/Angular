import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms-demo',
  templateUrl: './template-forms-demo.component.html',
  styleUrls: ['./template-forms-demo.component.css']
})
export class TemplateFormsDemoComponent implements OnInit {
  operatingSystems: string[] = [
    'Windows 10',
    'Linux',
    'Mac'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
