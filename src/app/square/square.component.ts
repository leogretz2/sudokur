import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  @Input() value: number | null = null;
  @Input() rowIndex!: number;
  @Input() colIndex!: number;
  @Output() valueChange = new EventEmitter<number>();

  onInput(event: any) {
    const newValue = event.target.value ? parseInt(event.target.value, 10) : 0;
    this.valueChange.emit(newValue);
  }
}


