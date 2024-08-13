import { CommonModule } from '@angular/common';
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
  imports: [NgbModule, CommonModule],
  templateUrl: './more-projects-view.component.html',
  styleUrl: './more-projects-view.component.scss'
})
export class MoreProjectsViewComponent {
  constructor(public activeModal: NgbActiveModal) {}

  projects:Project[] = [
    {name: 'Text Tools', description: 'A collection of useful text tools', url:'https://tt.ascyt.com/'},
    {name: 'Angular Template', description: 'A small Angular template with ng-bootstrap, custom styles and more. This website is built with it.', url: 'https://github.com/Ascyt/ngtemplate'},
    {name: 'Unity Camera Movement Template', description: 'A template Assets file for Unity that contains a 3D scene with a moveable camera. It\'s mainly made for universe-like games/applications with a full range of motion and rotation.', url:'https://github.com/Ascyt/Unity-Camera-Movement-Template'},
    {name: 'this is game', description: 'A 2D shooter game with upgrades. Probably one of my biggest projects, but abandoned nonetheless.', url: 'https://ascyt.itch.io/this-is-game'},
    {name: 'gamejamspace', description: 'A small difficult 2D shooter game.', url: 'https://ascyt.itch.io/gamejamspace'},
    {name: 'Particle Simulator', description: 'Scratch project to play around with particles.', url: 'https://scratch.mit.edu/projects/707207683/'},
    {name: 'Evolution Simulator', description: 'A simple evolution simulator made in Scratch.', url: 'https://scratch.mit.edu/projects/453814860/'},
    {name: 'Laser Balls', description: 'My first ever fully finished and published game.', url: 'https://scratch.mit.edu/projects/434888723/'},
    {name: 'Rarities', description: 'Free to use list of rarities for video games.', url: 'https://rarities.ascyt.com/'},
    {name: 'Folding Elytra', description: 'Minecraft Vanilla resource pack that changes the model of the Elytra.', url: 'https://www.planetminecraft.com/texture-pack/folding-elytra/'},
    {name: 'Minesweeper Pattern Prevalence', description: 'A simple script that runs Minesweeper simulations to see how often each pattern occurs.', url:'https://github.com/Ascyt/Minesweeper-pattern-prevalence'},
    {name: 'The Iceberg', description: '???', url: 'https://the-iceberg.ascyt.com/'},
  ];
}
