import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AudioService } from '../../../../services/audio-service';

@Component({
  selector: 'app-alfabeto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alfabeto.html',
  styleUrl: './alfabeto.css',
})
export class Alfabeto {
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  activateLetter : string | null = null
  isPlaying : boolean = false;
  erroMessage: string | null = null



  constructor(public audioService: AudioService){
    
    audioService.isPlaying$.subscribe(value =>{
      this.isPlaying = value;
      if(!value){
        this.activateLetter = null
      }
    });

    this.audioService.error$.subscribe(error =>{
      this.erroMessage = error;
      if(error){
        this.activateLetter = null
      }
    })
  }

  playSound(letters: string){
    if(this.isPlaying) return;
    this.activateLetter = letters
    this.audioService.play(`/assets/audio/alfabeto/${letters}.mp3`);


  }

}
