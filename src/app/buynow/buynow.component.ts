import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsService } from '../shared/service/productdetails.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-buynow',
  standalone: true,
  imports: [],
  templateUrl: './buynow.component.html',
  styleUrl: './buynow.component.scss'
})
export class BuynowComponent {

  buyNowList: any
  constructor(public modal: NgbModal, private productDetailsService: ProductDetailsService) { }

  ngOnInit() {
    this.getbuyNow()
  }

  closeModal() {
    this.modal.dismissAll();
  }
  getbuyNow() {
    this.productDetailsService.getRegisterPDF().subscribe((res: HttpResponse<any>) => {
      this.buyNowList = res.body
    })

  }
}
