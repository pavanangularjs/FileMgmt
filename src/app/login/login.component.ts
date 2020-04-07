import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private router: Router, private fb: FormBuilder) { 
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onLogin() {
    if (this.loginForm.controls.userName.value === 'admin' && this.loginForm.controls.password.value=== 'admin' ) {
      // this.router.navigate(['/files']);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid UserName/Password');
    }
  }

}
