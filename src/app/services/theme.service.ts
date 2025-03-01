import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeKey = 'app-theme';

  constructor() {
    this.loadTheme();
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem(this.themeKey, newTheme);
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem(this.themeKey) || 'light';
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
  }

  checkTheme(){
    return document.documentElement.getAttribute('data-bs-theme')
  }
}
