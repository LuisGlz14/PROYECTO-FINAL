import { TexttospeechService } from './services/texttospeech.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple';

  constructor() {
    speechSynthesis.getVoices();
  }

  onActivate(event) {
    window.scroll(0, 0);
  }
}
