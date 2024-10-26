import {
  Component,
  ViewEncapsulation,
  OnInit,
  HostListener,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ThemeSwitcherComponent implements OnInit {
  public isLightTheme = true;
  public moon = faMoon;
  public sun = faSun;

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

  @HostListener('keydown.enter', ['$event'])
  onEnterKey(event: KeyboardEvent) {
    // Toggle theme when the Enter key is pressed
    this.onThemeSwitchChange();
  }
}
