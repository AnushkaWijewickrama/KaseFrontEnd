import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { ProductService } from '../shared/service/product.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  imports: [HeaderComponent, FooterComponent, RouterLink]
})
export class ProductsComponent {
  productList: any = []
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.query().subscribe((res: HttpResponse<any>) => {
      this.productList = res.body
      console.log(res.body)
    })
  }
}
