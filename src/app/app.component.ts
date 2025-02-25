import { Component } from '@angular/core';
import { TitleAnimationComponent } from './title-animation/title-animation.component';
import { UwuCardComponent } from './uwu-card/uwu-card.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';

export interface ToDo {
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  imports: [TitleAnimationComponent, UwuCardComponent, CreateTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  todos: ToDo[] = [
    {
      title: 'Become UwU',
      done: false,
    },
    {
      title: 'Be Awesome',
      done: true,
    },
  ];

  toggleDone(index: number) {
    const todo = this.todos[index];
    if (!todo) return;

    todo.done = !todo.done;
  }

  addTodo(todo: ToDo) {
    this.todos.unshift(todo);
  }
}
