import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-themes-new-page',
  templateUrl: './themes-new-page.component.html',
  styleUrls: ['./themes-new-page.component.css']
})
export class ThemesNewPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(newThemeForm: NgForm): void {
    console.log(newThemeForm.value);

  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
