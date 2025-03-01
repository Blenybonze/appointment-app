import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private translationService: TranslationService,
    private themeService: ThemeService,
  ) { }

  setLanguage(strLanguage: string) {
    this.translationService.useLanguage(strLanguage);
  }

  checkLanguage() {
    return this.translationService.languageSelected();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  checkTheme() {
    return this.themeService.checkTheme();
  }

}
