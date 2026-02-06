import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo03',
  imports: [],
  templateUrl: './exo03.html',
  styleUrl: './exo03.css',
})
export class Exo03 {
  
  
  compteur: number = 0;
  chrono: any;
  isRunning: boolean = false;
  
  start() 
  {
    if(!this.isRunning)
      {
        this.isRunning = true;
        this.chrono = setInterval(() => {
          this.compteur++;
        }, 1000);
      }
    console.log(this.compteur);
  }
    
  pause() 
    {
      this.isRunning = false;
      clearInterval(this.chrono)
    }
    stop()
    {
      this.pause();
      this.compteur = 0;
    }

    
  }
  