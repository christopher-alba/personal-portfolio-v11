import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ThemeSwitcherComponent implements OnInit {
  public isLightTheme = true;

  ngOnInit() {
    // Load the saved theme from localStorage on initialization
    const savedTheme = localStorage.getItem('theme');
    this.isLightTheme = savedTheme ? savedTheme === 'light' : true;
    this.applyTheme();
  }

  onThemeSwitchChange() {
    // Toggle theme and save the new preference to localStorage
    this.isLightTheme = !this.isLightTheme;
    this.applyTheme();
    localStorage.setItem('theme', this.isLightTheme ? 'light' : 'dark');
  }

  private applyTheme() {
    // Set the data-theme attribute based on the current theme
    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }
}
