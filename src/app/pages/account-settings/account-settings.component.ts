import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.initCheck();
  }

  public changeTheme(themeReference: any): void {
    this.settingsService.setTheme(themeReference.getAttribute('data-theme'));
    this.settingsService.applyTheme();
    this.checkTheme(themeReference);
  }

  private checkTheme(theme: any): void {
    const themes: any = document.getElementsByClassName('selector'); // HTMLCollectionOf<Element>
    for (const currentTheme of themes) {
      currentTheme.classList.remove('working');
    }
    theme.classList.add('working');
  }

  private initCheck(): void {
    const selectedTheme = this.settingsService.getTheme();
    const themes: any = document.getElementsByClassName('selector'); // HTMLCollectionOf<Element>
    for (const theme of themes) {
      if (theme.getAttribute('data-theme') === selectedTheme) {
        theme.classList.add('working');
        break;
      }
    }
  }
}
