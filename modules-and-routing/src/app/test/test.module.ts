import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    OneComponent,
    TwoComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestModule { }
