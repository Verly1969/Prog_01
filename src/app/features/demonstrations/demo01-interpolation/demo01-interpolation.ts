import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo01-interpolation',
  imports: [],
  templateUrl: './demo01-interpolation.html',
  styleUrl: './demo01-interpolation.css',
})
export class Demo01Interpolation implements OnInit, OnDestroy {
  
  firstname: string = "Eddy";
  age: number = 56;
  isDevelopper: boolean = true;

  maVariable1!: string;
  declare maVariable2: string;

  maVariable3: string | null = null;
  maVariable4?: string = undefined;

  maVariable5: number[] = [1, 2, 3, 4, 5]; // ❤️
  maVariable6: Array<number> = [1, 2, 3, 4, 5];

  maVariable7: unknown;
  maVariable8!: never;

  maVariable9: { lastname: string } = { lastname: "VERLY"};

  constructor(){}
  
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    
  }
  
}
