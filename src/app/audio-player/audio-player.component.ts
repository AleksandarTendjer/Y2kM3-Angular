import { Component } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent {
 isAudioPlaying = false;
  constructor(private audioPlayerComponent: AudioPlayerComponent) {}

  toggleAudio() {
    this.isAudioPlaying = !this.isAudioPlaying;
  }
}
