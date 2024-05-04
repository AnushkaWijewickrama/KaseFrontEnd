import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsService } from '../shared/service/productdetails.service';
import { HttpResponse } from '@angular/common/http';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MoredetailsComponent } from '../moredetails/moredetails.component';
import { ContactusComponent } from '../contactus/contactus.component';


@Component({
  selector: 'app-singleproduct',
  standalone: true,
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.scss',
  imports: [HeaderComponent, FooterComponent]
})
export class SingleproductComponent implements OnInit {
  productdetailsList: any = []
  selectedId: string = '';
  private modalService = inject(NgbModal);
  constructor(private route: ActivatedRoute, private productDetailsService: ProductDetailsService, public router: Router, private spinner: NgxSpinnerService, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
    this.spinner.show()
    this.route.params.subscribe((res: any) => {
      this.selectedId = res.id
      this.productDetailsService.query(res.id).subscribe((res: HttpResponse<any>) => {
        this.productdetailsList = res.body.productdetails[0]

        this.spinner.hide()
      })
    })
    const img: any = document.getElementById("image");
    const preview: any = document.querySelector(".zoom-preview");
    const calculateRatio = (value: any) => preview.offsetWidth / value;
    const x = calculateRatio(100);
    const y = calculateRatio(100);
    const setBackgroundProperties = (posX: any, posY: any) => {
      preview.style.backgroundImage = `url(${img.src})`;
      preview.style.backgroundSize = `${img.width * x}px ${img.height * y}px`;
      preview.style.backgroundPosition = `-${posX * x}px -${posY * y}px`;
    };
    img.addEventListener("mousemove", (e: any) => {
      const posX = e.offsetX;
      const posY = e.offsetY;
      setBackgroundProperties(posX, posY);
    });
    img.addEventListener("mouseout", () => {
      preview.style.backgroundImage = "none";
    });
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
      link.download = res.body.productdetails[0]?.pdf
      link.href = res.body.productdetails[0]?.pdf
      link.click()
    })
  }
  openLg() {
    this.modalService.open(MoredetailsComponent, { size: 'lg' });
  }
  downloadPDF() {
    this.productDetailsService.getRegisterPDF().subscribe((res: HttpResponse<any>) => {
      let link = document.createElement("a")
      link.download = res.body?.pdf
      link.href = res.body?.pdf
      link.click()
    })

  }



}
