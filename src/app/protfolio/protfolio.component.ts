import { log } from 'node:console';
import { Component, HostListener } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-protfolio',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './protfolio.component.html',
  styleUrl: './protfolio.component.css'
})
export class ProtfolioComponent {
isClicked:boolean = false

imgSrc:string = ""
open(currentImg:string) {
  this.isClicked = true
  this.imgSrc = "./assets/images/" + currentImg
}

close() {
  this.isClicked = false
}
}
