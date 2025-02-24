import { Component } from '@angular/core';
import { TitleAnimationComponent } from './title-animation/title-animation.component';
import { UwuCardComponent } from './uwu-card/uwu-card.component';

export interface ToDo {
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  imports: [TitleAnimationComponent, UwuCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  todos: ToDo[] = [
    {
      title: 'Become UwU',
      done: true,
    },
  ];

  toggleDone(index: number) {
    const todo = this.todos[index];
    if (!todo) return;

    todo.done = !todo.done;
  }
}
