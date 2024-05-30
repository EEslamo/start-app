import { UserAPIFunctionService } from './../../../services/user-apifunction-service.service';
import { UserModels } from './../../../models/Users';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css',"../../shared.css"]
})
export class AddUserComponent {
  message: string = '';
  UserObject = new UserModels();
  constructor(public serv: UserAPIFunctionService) {
    this.serv.auth();
  }

  create() {
    this.serv.post(this.UserObject).subscribe((data: any) => {
      this.message="User created successfully!";
    });
    setTimeout(() => {
      this.message = '';
    }, 1000);
  }
}
