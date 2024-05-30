import { Component } from '@angular/core';
import { ServicesModels } from 'src/app/models/srevices';
import { APIfunctoinsService } from 'src/app/services/apifunctoins.service';
import { ServicesAPIFunctionService } from 'src/app/services/services-apifunction.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  alldata!: ServicesModels[];
  constructor(public serv: ServicesAPIFunctionService) {
    this.serv.get().subscribe((data: any) => {
      this.alldata = data;
    });
  }
}
