import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  constructor() { }
  setBodyBackgroundImage(imageUrl: string) {
    document.body.style.backgroundImage = `url('${imageUrl}')`;
  }
}
