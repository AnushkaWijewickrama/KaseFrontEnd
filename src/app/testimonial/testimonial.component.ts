import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/service/client.service';
import { HttpResponse } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
declare var $: any;


@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './testimonial.component.html',
  host: { ngSkipHydration: 'true' },
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent implements OnInit {

  clientList: any = []
  constructor(private clientService: ClientService) { }
  ngOnInit(): void {
    this.clientService.query().subscribe((res: HttpResponse<any>) => {
      this.clientList = res.body
      console.log(res.body)
    })
  }
  ngAfterViewInit(): void {
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      items: 1,
      dots: true,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-arrow-left"></i>',
        '<i class="fa fa-arrow-right"></i>',
        ''
      ]
    });
  }

}
