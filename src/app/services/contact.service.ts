import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from '../core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService{

  constructor(http: HttpClient) {
    super(http, `${environment.endpoint_url}/Contact`);
}
}
