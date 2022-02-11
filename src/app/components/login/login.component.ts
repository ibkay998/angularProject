import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../service/auth.service';

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
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe({ 
        next: (v) => {
          console.log(v);
          this.router.navigate(['/admin']);
        },
        error: (e) => {
          alert(e.message);
        }
      }
      );
    }
  }

}
