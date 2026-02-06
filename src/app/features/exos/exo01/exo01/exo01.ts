import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo01',
  imports: [],
  templateUrl: './exo01.html',
  styleUrl: './exo01.css',
})
export class Exo01 {
  
  fullName: string = "VERLY Eddy";
  email: string = "eddyverly@icloud.com";
  dateOfBirth: Date = new Date("1969-11-26");
  gender: "M" | "F" | "X" = "M";
  languages: string[] = ["Français", "Nederlands"];
  urlProfilPicture?: string;

}
