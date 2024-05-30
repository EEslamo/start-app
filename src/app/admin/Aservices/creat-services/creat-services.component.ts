import { ServicesAPIFunctionService } from 'src/app/services/services-apifunction.service';
import { ServicesModels } from './../../../models/srevices';
import { Component } from '@angular/core';

@Component({
  selector: 'app-creat-services',
  templateUrl: './creat-services.component.html',
  styleUrls: ['./creat-services.component.css', '../../shared.css'],
})
export class CreatServicesComponent {
  message: string = '';
  servicesObject = new ServicesModels();
  constructor(public serv: ServicesAPIFunctionService) {
    this.serv.auth();
  }

  create() {
    this.serv.post(this.servicesObject).subscribe((data: any) => {
      this.message = 'Service created successfully!';
    });
    setTimeout(() => {
      this.message = '';
    }, 1000);
  }
}
