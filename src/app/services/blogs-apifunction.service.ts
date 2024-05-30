import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogsModels } from '../models/blogs';
import { APIfunctoinsService } from './apifunctoins.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BlogsAPIFunctionService extends APIfunctoinsService<BlogsModels> {
  constructor(public override http: HttpClient, public override router:Router) {
    super("http://localhost:3000/blogs",http,router);
  }

}
