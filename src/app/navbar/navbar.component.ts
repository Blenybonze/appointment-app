import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private translationService: TranslationService
  ) { }

  setLanguage(strLanguage: string) {
    this.translationService.useLanguage(strLanguage);
  }
}
