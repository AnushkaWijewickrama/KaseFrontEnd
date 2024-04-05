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

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [HeaderComponent, HeroComponent, CategoryComponent, AboutComponent, ProductlistComponent, QuoteComponent, TestimonialComponent, FooterComponent, ContactusComponent]
})
export class MainComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])

  ngOnInit(): void {
    // this.onWindowScroll()
  }
  activeSection: string = '';
  onWindowScroll() {
    console.log('dsdsd')
    const aboutSection: any = document.getElementById('about');
    const productSection: any = document.getElementById('productlist');
    const testimonialSection: any = document.getElementById('testimonial');
    const contactSection: any = document.getElementById('contactus');
    console.log(contactSection)

    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= aboutSection?.offsetTop && scrollPosition < productSection?.offsetTop) {
      this.activeSection = 'about';
    } else if (scrollPosition >= productSection?.offsetTop && scrollPosition < testimonialSection?.offsetTop) {
      this.activeSection = 'productlist';
    } else if (scrollPosition >= testimonialSection?.offsetTop && scrollPosition < contactSection?.offsetTop) {
      this.activeSection = 'testimonial';
      if (scrollPosition >= contactSection?.offsetTop) {
        this.activeSection = 'contactus';
      } else {
        this.activeSection = '';
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
