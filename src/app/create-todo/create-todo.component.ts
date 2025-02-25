import { Component, computed, ElementRef, output, viewChild } from '@angular/core';
import { ToDo } from '../app.component';
import { FormsModule, FormSubmittedEvent } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  imports: [FormsModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
})
export class CreateTodoComponent {
  readonly onCreateTodo = output<ToDo>();

  todoTitle: string = '';

  onSubmit() {
    if (!this.todoTitle) return;

    const todo: ToDo = {
      title: this.todoTitle,
      done: false,
    };

    this.todoTitle = '';

    this.onCreateTodo.emit(todo);
  }
}
