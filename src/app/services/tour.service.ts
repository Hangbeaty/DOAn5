import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from '../core/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class TourService extends BaseService {
  constructor(http: HttpClient) {
    super(http, `${environment.endpoint_url}/Tour`);
  }
  override getState(): Observable<any> {
    this.state = {
      listStatus: [
        { name: 'Hoạt động', value: true },
        { name: 'Dừng hoạt động', value: false },
      ],
    };
    return forkJoin({
      listCategory: this.getAllCategory(),
      listPlace: this.getAllplace().pipe(catchError(() => of([]))),
    }).pipe(
      map(
        (data: any) =>
          (this.state = {
            ...this.state,
            ...data,
          })
      )
    );
  }
  getAllCategory() {
    return this.http.get<any>(`${environment.endpoint_url}/category`);
  }
  getAllplace() {
    return this.http.get<any>(`${environment.endpoint_url}/place`);
  }
  orderTour(data: any): Observable<any> {
    return this.http.post<any>(`${environment.endpoint_url}/order/order`, data);
  }

  override get( params: any = {}) {
    return this.http.get<any>(this.baseURL + '/search', {
      params: params,
    });
  }
}
