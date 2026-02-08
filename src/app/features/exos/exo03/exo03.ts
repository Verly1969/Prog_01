import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-exo03',
  imports: [],
  templateUrl: './exo03.html',
  styleUrl: './exo03.css',
})
export class Exo03 {
  
  
  compteur?: number;
  chrono: WritableSignal<number> = signal(0);
  
  increment() {
    console.log(`Chrono ==> ${this.chrono()}`);
    this.chrono.update(c => c + 1);
  }

  start() {
    if(this.compteur !== undefined) return;

    console.log(`Chrono démarré !`);
    this.compteur = setInterval(() => {
      this.increment();
    }, 1000);
      
  }
    
  stop() {
    console.log(`Chrono est arrêté !`);
    clearInterval(this.compteur);
    this.compteur = undefined;
  }
  
  reset()
    {
      this.stop();
      console.log(`Chrono remit à zéro !`);
      this.chrono.set(0);
    } 
  }
  