import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAPIFunctionService } from 'src/app/services/user-apifunction-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../shared.css'],
})
export class LoginComponent {
  UserName!: string;
  UserPassword!: string;
  message: string = '';
  not: string = '';

  constructor(private serv: UserAPIFunctionService, private router: Router) {}

  Login() {
    this.serv.get().subscribe((data: any) => {
      let user = data.find((userdata: any) => {
        return (
          userdata.name == this.UserName &&
          userdata.password == this.UserPassword
        );
      });

      if (user) {
        this.message = 'You are admin';
        localStorage.setItem("admin","admin1");
        setTimeout(() => {
          this.message = '';
        }, 1000);
        setTimeout(() => {
          this.router.navigateByUrl('/admin');
        }, 1000);
      } else {
        this.not = 'You are not admin';
        setTimeout(() => {
          this.not = '';
        }, 1000);
      }
    });
  }
}
