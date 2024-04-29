import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/service/product.service';
import { HttpResponse } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LAZYLOAD_IMAGE_HOOKS, LazyLoadImageModule, ScrollHooks } from 'ng-lazyload-image';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [NgIf, RouterLink, NgFor, LazyLoadImageModule, NgxPaginationModule],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent {
  productList: any = []
  p: number = 0
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.query().subscribe((res: HttpResponse<any>) => {
      this.productList = res.body
    })
  }

}
