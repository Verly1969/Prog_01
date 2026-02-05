import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./features/home/home";
import { Demo01Interpolation } from "./features/demonstrations/demo01-interpolation/demo01-interpolation";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Demo01Interpolation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Prog_01');
}
