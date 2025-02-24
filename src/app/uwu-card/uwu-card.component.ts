import { Component, input, Input, output } from '@angular/core';
import { ToDo } from '../app.component';

@Component({
  selector: 'app-uwu-card',
  imports: [],
  templateUrl: './uwu-card.component.html',
  styleUrl: './uwu-card.component.scss',
})
export class UwuCardComponent {
  public todo = input.required<ToDo>();
  public doneToggle = output<void>();
}
