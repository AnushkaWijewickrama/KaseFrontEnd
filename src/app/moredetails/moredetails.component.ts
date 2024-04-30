import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-moredetails',
  standalone: true,
  imports: [],
  templateUrl: './moredetails.component.html',
  styleUrl: './moredetails.component.scss'
})
export class MoredetailsComponent {

  constructor(public modal: NgbModal) { }
  closeModal() {
    this.modal.dismissAll();
  }
}
