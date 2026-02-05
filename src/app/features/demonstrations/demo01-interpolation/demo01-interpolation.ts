import { Component } from '@angular/core';

@Component({
  selector: 'app-demo01-interpolation',
  imports: [],
  templateUrl: './demo01-interpolation.html',
  styleUrl: './demo01-interpolation.css',
})
export class Demo01Interpolation {

  firstname: string = "Eddy";
  age: number = 56;
  isDevelopper: boolean = true;
}
