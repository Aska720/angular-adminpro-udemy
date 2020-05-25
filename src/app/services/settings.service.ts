import { Injectable } from '@angular/core';

interface Settings {
  themeUrl: string;
  theme: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private themeBaseUrl = 'assets/css/colors/';

  private settings: Settings = {
    themeUrl: 'assets/css/colors/default-dark.css',
    theme: 'default-dark'
  };

  constructor() {
    this.loadSettings();
    this.applyTheme();
  }

  private loadSettings() {
    const settings = localStorage.getItem('settings');
    if (settings) {
      this.settings = JSON.parse(settings);
    }
  }

  private saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  public setTheme(theme: string) {
    this.settings.theme = theme;
    this.settings.themeUrl = `${this.themeBaseUrl}${theme}.css`;
    this.saveSettings();
  }

  public getTheme(): string {
    return this.settings.theme;
  }

  public applyTheme(): void {
    document.getElementById('theme').setAttribute('href', this.settings.themeUrl);
  }
}
