import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contactus-modal',
  standalone: true,
  imports: [],
  templateUrl: './contactus-modal.component.html',
  styleUrl: './contactus-modal.component.scss'
})
export class ContactusModalComponent {
  constructor(public modal: NgbModal) { }
  closeModal() {
    this.modal.dismissAll();
  }

}
