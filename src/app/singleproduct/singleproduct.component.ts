import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductDetailsService } from '../shared/service/productdetails.service';
import { HttpResponse } from '@angular/common/http';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MoredetailsComponent } from '../moredetails/moredetails.component';
import { PreviousRouteService } from '../shared/util/previous-route.service';
import { BuynowComponent } from '../buynow/buynow.component';
import { ContactusModalComponent } from '../contactus-modal/contactus-modal.component';


@Component({
  selector: 'app-singleproduct',
  standalone: true,
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.scss',
  imports: [HeaderComponent, FooterComponent, RouterLink]
})
export class SingleproductComponent implements OnInit {
  productdetailsList: any = []
  selectedId: string = '';
  private modalService = inject(NgbModal);
  constructor(private route: ActivatedRoute, private productDetailsService: ProductDetailsService, public router: Router, private spinner: NgxSpinnerService, config: NgbModalConfig, private previousRouteService: PreviousRouteService, private rt: Router) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.spinner.show()
    this.route.params.subscribe((res: any) => {
      this.selectedId = res.id
      this.productDetailsService.query(res.id).subscribe((res: HttpResponse<any>) => {
        this.productdetailsList = res.body?.productdetails[0]
        this.spinner.hide()
      }, (error) => {
      })
    })
  }
  img(anything: any) {
    const x: any = document.querySelector('.slide')
    x.src = anything;
  }

  change(change: any) {
    const line: any = document.querySelector('.home');
    line.style.background = change;
  }
  getMoreDetails() {
    this.productDetailsService.query(this.selectedId).subscribe((res: HttpResponse<any>) => {
      let link = document.createElement("a")
      link.download = res.body?.productdetails[0].pdf
      link.href = res.body?.productdetails[0].pdf
      link.click()
    })
  }
  openLg() {
    this.modalService.open(ContactusModalComponent, { size: 'lg' });
  }
  openLgBuyNow() {
    this.modalService.open(BuynowComponent, { size: 'lg' });
  }




}
