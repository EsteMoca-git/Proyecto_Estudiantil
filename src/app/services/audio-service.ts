import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audio : HTMLAudioElement | null = null;
  isPlaying = false;

  private isPlayingSubject = new BehaviorSubject<boolean>(false);
  isPlaying$ = this.isPlayingSubject.asObservable();

  private errorSubject = new BehaviorSubject<string | null>(null);
  error$ = this.errorSubject.asObservable();

  constructor(){

  }

  play(path: string): void {
    this.errorSubject.next(null);

    if(this.audio){
      this.audio.pause();
      this.audio.currentTime = 0;
    }

    this.audio = new Audio(path);
    this.isPlayingSubject.next(true);

    this.audio.onerror = ()=>{
      this.isPlayingSubject.next(false);
      this.errorSubject.next('No se pudo reproducir el audio!');
      this.audio = null;
    };

    this.audio.onended = ()=>{
      this.isPlayingSubject.next(false);
      this.audio = null    
    };

    this.audio.play().catch(()=>{
      this.isPlayingSubject.next(false);
      this.errorSubject.next('El navegador bloqueó el audio!')
      this.audio = null;
    })

  }
  stop(): void {
    if(this.audio){
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
      this.isPlayingSubject.next(false);
      
    }
  }
}
