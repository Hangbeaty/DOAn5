import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { catchError, forkJoin, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from '../core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService{

  constructor(http: HttpClient) {
    super(http, `${environment.endpoint_url}/Order`);
  }

}

