import { Component, ElementRef, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  scrollToSection(section: string): void {
    const element: any = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    else {
      this.router.navigate(['/']).then(() => {
        const element: any = document.getElementById(section);
        element?.scrollIntoView({ behavior: 'smooth' });

      })

    }
  }
}
