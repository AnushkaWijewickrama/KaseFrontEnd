import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from '../shared/util/request-util';
import { SERVER_API_URL } from '../shared/util/common-util';
import { CommonModule, JsonPipe, NgFor, NgIf, isPlatformBrowser } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
declare var $: any;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HttpClientModule, JsonPipe, NgFor, NgIf, CommonModule, SlickCarouselModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  bannerList: any = []
  slideConfig = {
    slidesToShow: 1,
    nav: true,
    arrows: false,
    dots: true,
    autoplay: true,
    slideSpeed: 300,
    loop: true,
    // navText: [
    //   '<i class="fa fa-arrow-left"></i>',
    //   '<i class="fa fa-arrow-right"></i>',
    //   ''
    // ],
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
  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object, private renderer: Renderer2, private elementRef: ElementRef) { }
  ngOnInit(): void {

    this.query().subscribe((res: HttpResponse<any>) => {
      this.bannerList = res.body
    })
  }
  query(req?: any): Observable<any> {
    const options = createRequestOption(req);
    return this.http.get<any[]>(SERVER_API_URL + '/api/banner', { params: options, observe: 'response' });
  }
}
