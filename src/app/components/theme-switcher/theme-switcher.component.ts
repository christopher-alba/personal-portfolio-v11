import { Component, OnInit, HostListener } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {
  public isLightTheme = true;
  public moon = faMoon;
  public sun = faSun;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Get the initial theme and subscribe to changes
    this.isLightTheme = this.themeService.currentTheme === 'light';
    this.themeService.theme$.subscribe((theme) => {
      this.isLightTheme = theme === 'light';
    });
  }

  onThemeSwitchChange() {
    // Toggle theme and notify the service
    const newTheme = this.isLightTheme ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
  }

  @HostListener('keydown.enter', ['$event'])
  onEnterKey(event: KeyboardEvent) {
    this.onThemeSwitchChange();
  }
}