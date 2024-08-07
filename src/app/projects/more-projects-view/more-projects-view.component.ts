import { Component } from '@angular/core';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

interface Project {
  name: string;
  description: string|null;
  url: string|null;
}

@Component({
  selector: 'app-more-projects-view',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './more-projects-view.component.html',
  styleUrl: './more-projects-view.component.scss'
})
export class MoreProjectsViewComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
