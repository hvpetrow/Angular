import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemesComponent } from './themes/themes.component';



@NgModule({
  declarations: [
    ThemeComponent,
    NewThemeComponent,
    ThemesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
