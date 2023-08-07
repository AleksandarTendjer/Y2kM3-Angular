import { Component } from '@angular/core';
import { BackgroundService } from '../../background.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private bgService: BackgroundService) { }

ngOnInit(): void {
    this.bgService.setBodyBackgroundImage('./assets/gifs/background.gif');
}
onEarthGifEnter() {
    this.translateElement('alexs', '-100', '90');
    this.translateElement('cyberspace', '140', '-90');
  }

  onEarthGifLeave() {
    this.translateElement('alexs', '100', '-90');
    this.translateElement('cyberspace', '-140', '90');
  }

  translateElement(elementId: string, translateX: string, translateY: string) {
    const element:HTMLElement = document.getElementById(elementId)??new HTMLElement();
    element.style.transform += `translate(${translateX}px, ${translateY}px)`;
    
  }
}
