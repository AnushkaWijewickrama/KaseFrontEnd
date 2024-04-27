import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { BrandService } from '../shared/service/brand.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-brand',
  standalone: true,
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss',
  imports: [HeaderComponent, RouterLink, NgxSpinnerModule, RouterOutlet, FooterComponent]
})
export class BrandComponent implements OnInit {
  brandList: any = []
  constructor(private router: ActivatedRoute, private brandService: BrandService, private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
    this.spinner.show()
    this.router.params.subscribe((res: any) => {
      this.brandService.getBrandSingle(res.id).subscribe((res: HttpResponse<any>) => {
        this.brandList = res.body?.brand
        this.spinner.hide()
      })
    })
  }

}
