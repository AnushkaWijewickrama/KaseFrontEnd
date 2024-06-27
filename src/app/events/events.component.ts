import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { CommonModule, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { createRequestOption } from '../shared/util/request-util';
import { SERVER_API_URL } from '../shared/util/common-util';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  imports: [HeaderComponent, HttpClientModule, JsonPipe, NgFor, NgIf, CommonModule, SlickCarouselModule, FooterComponent, RouterLink]
})
export class EventsComponent {
  slideConfig = {
    slidesToShow: 1,
    nav: true,
    arrows: false,
    dots: true,
    autoplay: true,
    slideSpeed: 10,
    loop: true,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      400: {
        items: 1,
        dots: false,
      },
      450: {
        items: 2,
        dots: false,
      },
      740: {
        items: 4,
        dots: false,
      },
      940: {
        items: 4,
        dots: false,
      }
    },

  }
  eventsList: any = [];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {

    this.query().subscribe((res: HttpResponse<any>) => {
      this.eventsList = res.body
    })
  }
  query(req?: any): Observable<any> {
    const options = createRequestOption(req);
    return this.http.get<any[]>(SERVER_API_URL + '/api/event', { params: options, observe: 'response' });
  }

}
