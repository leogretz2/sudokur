import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(private cdr: ChangeDetectorRef) {
    const puzzle = '070000043040009610800634900094052000358460020000800530080070091902100005007040802';
    this.sudokuGrid = this.convertPuzzleStringToGrid(puzzle)
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

  onInput(/*event: any*/value:string, rowIndex: number, colIndex: number): void {
    const newValue = value ? parseInt(value, 10) : 0;
    console.log(`Input at row ${rowIndex}, col ${colIndex}:`, newValue);
    this.sudokuGrid[rowIndex][colIndex] = isNaN(newValue) ? 0 : newValue;
    console.log('Updated Grid:', this.sudokuGrid);
    this.cdr.detectChanges(); // Force change detection
  }
  
  onInput2(event: any, rowIndex: number, colIndex: number): void {
    const newValue = event.target.value ? parseInt(event.target.value, 10) : 0;
    // const newValue = value ? parseInt(value, 10) : null;
    if (newValue !== this.sudokuGrid[rowIndex][colIndex]) {
      console.log(`Input Value: ${event.target.value}, Parsed Value: ${newValue}`);
      console.log(`Before Update: Grid[${rowIndex}][${colIndex}] = ${this.sudokuGrid[rowIndex][colIndex]}`);
      this.sudokuGrid[rowIndex][colIndex] = newValue;
      console.log(`After Update: Grid[${rowIndex}][${colIndex}] = ${this.sudokuGrid[rowIndex][colIndex]}`);
      console.log('Updated Grid:', this.sudokuGrid);
      this.cdr.detectChanges(); // Ensure the view is updated
    }
  }
  
  onModelChange(event: any, rowIndex: number, colIndex: number): void {
    // Log the new value and the position where the change occurred
    console.log(`Value changed at row ${rowIndex}, col ${colIndex}: ${event}`);
    // Optionally, you can perform additional logic here    
  }

  trackByFn(index: number, item: any): any {
    return index;
  }  
}
