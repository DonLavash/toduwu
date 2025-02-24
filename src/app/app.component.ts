import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleAnimationComponent } from "./title-animation/title-animation.component";

@Component({
  selector: 'app-root',
  imports: [TitleAnimationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
