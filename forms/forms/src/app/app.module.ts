import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { HighlightDemoComponent } from './highlight-demo/highlight-demo.component';
import { HighlightDirective } from './highlight.directive';
import { TemplateFormsDemoComponent } from './template-forms-demo/template-forms-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesDemoComponent,
    HighlightDemoComponent,
    HighlightDirective,
    TemplateFormsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
