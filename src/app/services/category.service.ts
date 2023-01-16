import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from '../core/services/base.service';
import { cleanDataTable } from '../core/utils/common-functions';
import {  Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {

  constructor(http: HttpClient) {
    super(http, `${environment.endpoint_url}/category`);
  }
  //  override search(params?: any): Observable<any> {
  //   const newParam: any = cleanDataTable(params);

  //   return this.http
  //     .get<any>(`${this.baseUrl}/Paging`, {
  //       params: { ...newParam },
  //     })
  // }
}
