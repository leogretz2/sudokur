import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-grid',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-grid.component.html',
  styleUrl: './main-grid.component.css'
})

export class MainGridComponent implements OnInit {
  sudokuGrid: number[][];

  constructor() {
    this.sudokuGrid = Array.from({ length: 9 }, () => Array(9).fill(null));
  }

  ngOnInit(): void {}
}
