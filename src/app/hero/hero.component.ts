import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from '../shared/util/request-util';
import { SERVER_API_URL } from '../shared/util/common-util';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HttpClientModule, JsonPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  bannerList: any = []
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.query().subscribe((res: HttpResponse<any>) => {
      console.log(res.body)
      this.bannerList = res.body
    })
  }
  query(req?: any): Observable<any> {
    const options = createRequestOption(req);
    return this.http.get<any[]>(SERVER_API_URL + '/api/banner', { params: options, observe: 'response' });
  }
}
