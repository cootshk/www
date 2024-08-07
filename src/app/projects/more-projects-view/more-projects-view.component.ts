import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-more-projects-view',
  standalone: true,
  imports: [],
  templateUrl: './more-projects-view.component.html',
  styleUrl: './more-projects-view.component.scss'
})
export class MoreProjectsViewComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
