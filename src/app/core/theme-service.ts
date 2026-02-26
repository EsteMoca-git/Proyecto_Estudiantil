import { Injectable, signal, effect } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme = signal<Theme>('light');

  constructor() {

    const savedTheme = localStorage.getItem('theme') as Theme | null;

    if (savedTheme) {
      this.theme.set(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.theme.set(prefersDark ? 'dark' : 'light');
    }

    effect(() => {
      const current = this.theme();  
      document.body.className = current;
      localStorage.setItem('theme', current);
    });
  }

  toggleTheme() {
    this.theme.update(value =>
      value === 'light' ? 'dark' : 'light'
    );
  }
}