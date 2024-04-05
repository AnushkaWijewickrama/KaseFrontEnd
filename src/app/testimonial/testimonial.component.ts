import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/service/client.service';
import { HttpResponse } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './testimonial.component.html',
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

}
