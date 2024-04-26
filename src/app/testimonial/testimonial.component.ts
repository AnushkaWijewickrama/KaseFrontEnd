import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/service/client.service';
import { HttpResponse } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
declare var $: any;


@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [NgOptimizedImage, SlickCarouselModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent implements OnInit {
  slideConfig = {
    slidesToShow: 4,
    nav: true,
    arrows: true,
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
  clientList: any = []
  constructor(private clientService: ClientService) { }
  ngOnInit(): void {
    this.clientService.query().subscribe((res: HttpResponse<any>) => {
      this.clientList = res.body
    })
  }
}
