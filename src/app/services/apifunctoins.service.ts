import { ServicesModels } from './../models/srevices';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogsModels } from '../models/blogs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class APIfunctoinsService<T> {
  constructor(@Inject(String) public URL: string, public http: HttpClient ,public router:Router) {}

  get(): Observable<T> {
    return this.http.get<T>(this.URL);
  }

  getbyId(id: any): Observable<T> {
    return this.http.get<T>(this.URL + `/${id}`);
  }

  post(obj: any): Observable<T> {
    return this.http.post<T>(this.URL, obj);
  }

  Delete(id: any) {
    return this.http.delete(this.URL + `/${id}`);
  }

  put(id: any, obj: any): Observable<T> {
    return this.http.put<T>(this.URL + `/${id}`, obj);
  }

  auth() {
    if (localStorage.getItem('admin')) {
    } else {
      this.router.navigateByUrl('/admin/user/login');
    }
  }
}
