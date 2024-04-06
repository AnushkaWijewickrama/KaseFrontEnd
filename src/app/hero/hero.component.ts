import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from '../shared/util/request-util';
import { SERVER_API_URL } from '../shared/util/common-util';
import { CommonModule, JsonPipe, NgFor, NgIf, isPlatformBrowser } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HttpClientModule, JsonPipe, NgFor, NgIf, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  bannerList: any = []
  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object, private renderer: Renderer2, private elementRef: ElementRef) { }
  ngOnInit(): void {

    this.query().subscribe((res: HttpResponse<any>) => {
      this.bannerList = res.body
      this.renderer.setAttribute(this.elementRef.nativeElement, 'ngSkipHydration', '');
    })
  }
  query(req?: any): Observable<any> {
    const options = createRequestOption(req);
    return this.http.get<any[]>(SERVER_API_URL + '/api/banner', { params: options, observe: 'response' });
  }
  ngAfterViewInit(): void {
    $(".header-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      items: 1,
      dots: true,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-arrow-right"></i>',
        '<i class="fa fa-arrow-left"></i>',
        ''
      ]
    });
  }
}
