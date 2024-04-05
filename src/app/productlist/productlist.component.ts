import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/service/product.service';
import { HttpResponse } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent implements OnInit {
  productList: any = []
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.query().subscribe((res: HttpResponse<any>) => {
      this.productList = res.body
      console.log(res.body)
    })
  }

}
