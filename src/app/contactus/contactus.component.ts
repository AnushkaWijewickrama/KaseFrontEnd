import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {
  @Input() contactUs = '#contactUs'

}
