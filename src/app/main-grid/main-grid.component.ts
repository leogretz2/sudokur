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
  sudokuGrid: (number|null)[][];

  constructor() {
    const puzzle = '070000043040009610800634900094052000358460020000800530080070091902100005007040802';
    this.sudokuGrid = this.convertPuzzleStringToGrid(puzzle)
    // this.sudokuGrid = Array.from({ length: 9 }, () => Array(9).fill(null));
  }

  ngOnInit(): void {}

  convertPuzzleStringToGrid(puzzle: string): (number|null)[][] {
    const grid: (number|null)[][] = [];
    for (let i = 0; i < 9; i++) {
      const row: (number|null)[] = [];
      for (let j = 0; j < 9; j++) {
        const value = parseInt(puzzle[i * 9 + j], 10);
        row.push(isNaN(value) ? null : value);
      }
      grid.push(row);
    }
    return grid;
  }
}
