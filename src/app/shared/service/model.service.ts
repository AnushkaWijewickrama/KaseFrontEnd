import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../util/common-util';
import { createRequestOption } from '../util/request-util';


@Injectable({ providedIn: 'root' })
export class ModelService {
  public SERVER_API_URL = SERVER_API_URL;
  public resourceUrl = this.SERVER_API_URL + '/api/model';

  constructor(protected http: HttpClient) { }

  query(req?: any): Observable<any> {
    const options = createRequestOption(req);
    return this.http.get<any[]>(this.resourceUrl, { params: options, observe: 'response' });
  }
  getModelSingle(id?: any): Observable<any> {
    return this.http.get<any[]>(this.resourceUrl + '/' + id, { observe: 'response' });
  }

}
