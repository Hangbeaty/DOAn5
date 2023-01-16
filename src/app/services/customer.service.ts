import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject,map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from '../core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService{
   subject = new BehaviorSubject({});
   user$=this.subject.asObservable();
  constructor(http: HttpClient) {
    super(http, `${environment.endpoint_url}/Customer`);
  }

    login(data: any) {
      return this.http.post<any>(`${this.baseUrl}/Login`, data).pipe(
        map((res) => {
          localStorage.setItem('user', JSON.stringify(res));
          this.subject.next(res);
          return res;
        })
      );

    }
    logout(){
      window.localStorage.removeItem('user');
      this.subject.next({});
    }

}
