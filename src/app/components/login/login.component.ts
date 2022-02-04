import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  data = new FormControl('')

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  doSomething(): void {
    console.log(this.loginForm.value.email)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
