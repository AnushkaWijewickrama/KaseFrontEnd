import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BrandService } from '../shared/service/brand.service';

@Component({
  selector: 'app-brand',
  standalone: true,
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss',
  imports: [HeaderComponent, RouterLink]
})
export class BrandComponent implements OnInit {
  brandList: any = []
  constructor(private router: ActivatedRoute, private brandService: BrandService) { }
  ngOnInit(): void {
    this.router.params.subscribe((res: any) => {
      this.brandService.getBrandSingle(res.id).subscribe((res: HttpResponse<any>) => {
        this.brandList = res.body?.brand
      })
    })
  }

}
