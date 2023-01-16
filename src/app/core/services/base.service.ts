import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { fromEvent, map, Observable, of } from 'rxjs';
import { BaseData } from '../abstract/base-data';
import { DataTable } from '../models/data-table.model';
import { cleanDataTable, dataURItoBlob, mapDataTable } from '../utils/common-functions';

@Injectable()
export class BaseService implements BaseData {
  constructor(public http: HttpClient, @Inject(String) public baseURL: string) {
    this.baseUrl = baseURL;
  }

  baseUrl!: string;
  state: any;

  getState(): Observable<any> {
    return of(this.state);
  }
  getAll() : Observable<any> {
    return this.http.get(this.baseURL);
  }
  get(href: string = '', params: any = {}) {
    return this.http.get(this.baseURL + `${href}`, {
      params: params,
    });
  }
  search(params?: any): Observable<DataTable<any>> {
    const newParam: any = cleanDataTable(params);

    return this.http
      .get<DataTable<any>>(`${this.baseUrl}/Paging`, {
        params: { ...newParam },
      })
      .pipe(map((data) => mapDataTable(data, params)));
  }

  findByCode(code: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${code}`);
  }
  findById(id: string | number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, data);
  }
  updateStatus(href: string = '', id: string, data: any): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/${href}/${id}`, data);
  }

  updateAction(id: string, data: any): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/${id}`, data);
  }
  update(data: any): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}`, data);
  }
  delete(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  UploadFileFormData(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/UploadPhotos', data);
  }
}
