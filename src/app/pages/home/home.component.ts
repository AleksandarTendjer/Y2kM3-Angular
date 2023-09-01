import { Component } from '@angular/core';
import { BackgroundService } from '../../background.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private bgService: BackgroundService) { }

private alexsInitialTransform: string = 'translate(-50%, -50%)';
private cyberspaceInitialTransform: string = 'translate(-50%, -50%)';

ngOnInit(): void {
    this.bgService.setBodyBackgroundImage('./assets/gifs/background.gif');
}
onEarthGifEnter() {
  this.translateElement('alexs', '-45', '30', '%');
  this.translateElement('cyberspace', '70', '-30', '%');
}

onEarthGifLeave() {
  // Reset to initial state after mouse leaves
  this.resetElement('alexs');
  this.resetElement('cyberspace');
}

  translateElement(elementId: string, translateX: string, translateY: string, unit: string = 'px') {
    const element:HTMLElement = document.getElementById(elementId)??new HTMLElement();
    element.style.transform = ` translate(-50%, -50%) translate(${translateX}${unit}, ${translateY}${unit})`;
    
  }
  resetElement(elementId: string) {
  const element: HTMLElement = document.getElementById(elementId) ?? new HTMLElement();
  if (elementId === 'alexs') {
    element.style.transform = this.alexsInitialTransform;
  } else if (elementId === 'cyberspace') {
    element.style.transform = this.cyberspaceInitialTransform;
  }
}
}
