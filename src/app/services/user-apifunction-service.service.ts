import { UserModels } from './../models/Users';
import { Injectable } from '@angular/core';
import { APIfunctoinsService } from './apifunctoins.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAPIFunctionService extends APIfunctoinsService<UserModels> {

  constructor(public override http :HttpClient , public override router:Router ) {
    super("http://localhost:3000/user",http,router);
   }
}
