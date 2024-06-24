import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from '../shared/util/request-util';
import { SERVER_API_URL } from '../shared/util/common-util';
import { CommonModule, JsonPipe, NgFor, NgIf, isPlatformBrowser } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HttpClientModule, JsonPipe, NgFor, NgIf, CommonModule, SlickCarouselModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  bannerList: any = []
  videoUrl!: string;
  safeVideoUrl: SafeResourceUrl | null = null;
  slideConfig = {
    slidesToShow: 1,
    nav: true,
    arrows: false,
    dots: true,
    autoplay: true,
    slideSpeed: 300,
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
  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object, private renderer: Renderer2, private sanitizer: DomSanitizer) {

  }
  ngOnInit(): void {

    this.query().subscribe((res: HttpResponse<any>) => {
      this.bannerList = res.body
      this.videoUrl = res.body[0]?.videoPath
      this.validateAndSanitizeUrl(this.videoUrl);
    })
  }
  query(req?: any): Observable<any> {
    const options = createRequestOption(req);
    return this.http.get<any[]>(SERVER_API_URL + '/api/banner', { params: options, observe: 'response' });
  }
  validateAndSanitizeUrl(url: string): void {
    if (this.isValidUrl(url)) {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      console.error('Invalid URL:', url);
    }
  }
  isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
}
