import { Component, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  @ViewChild('audioPlayer') audioPlayerRef: ElementRef | undefined;

  isAudioPlaying = false;
  toggleAudio() {
    const audioPlayer: HTMLAudioElement = this.audioPlayerRef?.nativeElement;

    if (this.isAudioPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
    this.isAudioPlaying = !this.isAudioPlaying;
  }
}
