import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo02',
  imports: [FormsModule],
  templateUrl: './exo02.html',
  styleUrl: './exo02.css',
})
export class Exo02 {

  fullname: string = "";
  email: string = "";
  dateOfBirth: Date = new Date(1969, 11, 26);
  gender:  "M" | "F" | "X" = "M";
  languages: string[] = [];

}
