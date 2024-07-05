import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {bootstrapApplication} from '@angular/platform-browser';

@Component({
  selector: 'app-tester',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tester.component.html',
  styleUrl: './tester.component.css'
})
export class TesterComponent {
  // @Input() size!: number | string;
  // @Output() sizeChange = new EventEmitter<number>();

  size = '';
  // dec() {
  //   this.resize(-1);
  // }
  // inc() {
  //   this.resize(+1);
  // }
  // resize(delta: number) { 
  //   this.size = Math.min(40, Math.max(8, +this.size + delta));
  //   this.sizeChange.emit(this.size);
  // }
}

// bootstrapApplication(TesterComponent)