import { Component } from '@angular/core';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeSwitcherComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
