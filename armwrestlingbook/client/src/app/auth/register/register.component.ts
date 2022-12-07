import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private toast: HotToastService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
      repass: new FormControl('', [Validators.required, this.isMatchPassword()]),
    });
  }

  isMatchPassword() {
    return (c: FormControl) => {
      if (!c.parent || c.value === c.parent.value.password) {
        return null;
      }
      return { invalid: true };
    }
  }

  handleRegister() {
    console.log(this.registerForm.value);
    const { email, password } = this.registerForm.value;
    this.authService.register(email, password)
      .pipe(this.toast.observe({
        success: 'Registered successfully',
        loading: 'Logging in...',
        error: 'Error...'
      })
      ).subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
