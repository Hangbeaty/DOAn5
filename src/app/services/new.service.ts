import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from '../core/services/base.service';
import { cleanDataTable } from '../core/utils/common-functions';

@Injectable({
  providedIn: 'root'
})
export class NewService extends BaseService{

  constructor(http: HttpClient) {
    super(http, `${environment.endpoint_url}/New`);
  }
}
