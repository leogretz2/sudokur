// src/app/group/group.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [CommonModule, SquareComponent],
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  @Input() group: number[][] = [];
  @Input() groupIndex!: number;
  @Output() squareInput = new EventEmitter<{ rowIndex: number, colIndex: number, value: number }>();

  ngOnInit() {}

  handleSquareInput(rowIndex: number, colIndex: number, value: number) {
    this.squareInput.emit({ rowIndex: this.groupIndex * 3 + rowIndex, colIndex: colIndex, value: value });
  }
}
