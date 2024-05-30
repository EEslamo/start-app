import { Injectable } from '@angular/core';
import { BlogsModels } from '../models/blogs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APIfunctoinsService } from './apifunctoins.service';
import { ServicesModels } from '../models/srevices';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServicesAPIFunctionService extends APIfunctoinsService<ServicesModels> {
  constructor(public override http: HttpClient , public override router:Router) {
    super("http://localhost:3000/services",http,router);
  }
}
