import { Component } from '@angular/core';

export interface ToDo {
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  imports: [TitleAnimationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
