import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainGridComponent } from './main-grid/main-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainGridComponent],
  templateUrl: './app.component.html',
  // templateUrl: './main-grid/main-grid.component.html',
  styleUrl: './app.component.css'
  // styleUrl: './main-grid/main-grid.component.css'
})
export class AppComponent {
  title = 'sudokur';
}
