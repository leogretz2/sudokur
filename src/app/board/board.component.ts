// src/app/board/board.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, SquareComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: number[][];

  constructor() {
    const puzzle = '070000043040009610800634900094052000358460020000800530080070091902100005007040802';
    this.board = this.convertPuzzleStringToGrid(puzzle);
  }

  ngOnInit(): void {}

  convertPuzzleStringToGrid(puzzle: string): number[][] {
    const grid: number[][] = [];
    for (let i = 0; i < 9; i++) {
      const row: number[] = [];
      for (let j = 0; j < 9; j++) {
        const value = parseInt(puzzle[i * 9 + j], 10);
        row.push(value === 0 ? 0 : value); // Use 0 to indicate an empty square
      }
      grid.push(row);
    }
    return grid;
  }

  isValid(board: number[][], row: number, col: number, value: number): boolean {
    // Check the row
    for (let c = 0; c < 9; c++) {
      if (board[row][c] === value) {
        return false;
      }
    }

    // Check the column
    for (let r = 0; r < 9; r++) {
      if (board[r][col] === value) {
        return false;
      }
    }

    // Check the group
    const groupRowStart = Math.floor(row / 3) * 3;
    const groupColStart = Math.floor(col / 3) * 3;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (board[groupRowStart + r][groupColStart + c] === value) {
          return false;
        }
      }
    }

    return true;
  }

  handleSquareInput({ rowIndex, colIndex, value }: { rowIndex: number, colIndex: number, value: number }) {
    if (this.isValid(this.board, rowIndex, colIndex, value)) {
      this.board[rowIndex][colIndex] = value;
    } else {
      // Handle invalid input (e.g., show an error message)
      console.error('Invalid move');
    }
  }
}
