import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { CategoryComponent } from "../category/category.component";
import { AboutComponent } from "../about/about.component";
import { ProductlistComponent } from "../productlist/productlist.component";
import { QuoteComponent } from "../quote/quote.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { FooterComponent } from "../footer/footer.component";
import { ContactusComponent } from "../contactus/contactus.component";
import { LoaderService } from '../shared/service/loader.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [HeaderComponent, HeroComponent, CategoryComponent, AboutComponent, ProductlistComponent, QuoteComponent, TestimonialComponent, FooterComponent, ContactusComponent, AsyncPipe, NgIf]
})
export class MainComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // this.onWindowScroll()
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
