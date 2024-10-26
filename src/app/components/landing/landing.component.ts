import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit {
  public theme;
  constructor(public themeService: ThemeService) {
    this.theme = themeService.currentTheme;
  }
  ngOnInit(): void {
    this.themeService.theme$.subscribe((theme) => {
      this.theme = theme;
    });
  }
}
