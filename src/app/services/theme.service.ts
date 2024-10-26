import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>(
    localStorage.getItem('theme') || 'light'
  );
  theme$ = this.themeSubject.asObservable();

  constructor() {
    // Set the initial theme based on localStorage when the service is instantiated
    this.setTheme(this.currentTheme);
  }

  setTheme(theme: string) {
    localStorage.setItem('theme', theme);
    this.themeSubject.next(theme);
    document.body.setAttribute('data-theme', theme);
  }

  get currentTheme() {
    return this.themeSubject.value;
  }
}
