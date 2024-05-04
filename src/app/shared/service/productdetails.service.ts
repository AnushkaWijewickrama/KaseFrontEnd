import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../util/common-util';
import { createRequestOption } from '../util/request-util';


@Injectable({ providedIn: 'root' })
export class ProductDetailsService {
  public SERVER_API_URL = SERVER_API_URL;
  public resourceUrl = this.SERVER_API_URL + '/api/product-details';
  public resourcePDFUrl = this.SERVER_API_URL + '/api/registerDealer';

  constructor(protected http: HttpClient) { }

  query(id?: any): Observable<any> {
    return this.http.get<any[]>(this.resourceUrl + '/' + id, { observe: 'response' });

  }
  getRegisterPDF(): Observable<any> {
    return this.http.get<any[]>(this.resourcePDFUrl, { observe: 'response' });

  }


}
