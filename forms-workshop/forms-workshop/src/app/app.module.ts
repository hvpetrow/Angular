import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './feature/pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { counterReducer, currentUserReducer, IRootState } from './+store';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    PagesModule,
    StoreModule.forRoot<IRootState>({
      counter: counterReducer,
      currentUser: currentUserReducer,
    }),
    StoreModule.forRoot({}, {}),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (authService: AuthService) => {
        return () => authService.authenticate();
      },
      deps: [AuthService],
      multi: true
    }
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
