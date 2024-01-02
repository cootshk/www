import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

interface Project {
  name: string;
  description: string;
  url: string;
  routerLink: string;
  image: string;
  isGolden: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgbModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [{name: 'SMSH', description: 'Simple but powerful markup language that compiles to HTML', url:'https://smsh.ascyt.com/', routerLink: '/projects/smsh', image: 'assets/images/projects/smsh.png', isGolden:true}, {name: 'ezgpt', description: 'Intuitive and easy-to-use Python library for usage of OpenAI\'s API', url:'https://pypi.org/project/ezgpt', routerLink: '/projects/ezgpt', image: 'assets/images/projects/ezgpt.png', isGolden:true}, {name: 'Text Tools', description: 'A collection of useful text tools', url:'https://tt.ascyt.com/', routerLink: '/projects/tt', image: 'assets/images/projects/tt.png', isGolden:false}];
}
