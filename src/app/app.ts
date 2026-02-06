import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./features/home/home";
import { Demo01Interpolation } from "./features/demonstrations/demo01-interpolation/demo01-interpolation";
import { Exo01 } from "./features/exos/exo01/exo01/exo01";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Demo01Interpolation, Exo01],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Prog_01');
}
