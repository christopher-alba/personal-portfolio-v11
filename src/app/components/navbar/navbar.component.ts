import { Component, HostListener } from '@angular/core';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeSwitcherComponent, FontAwesomeModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
    trigger('navbarInOut', [
      transition(':enter', [
        style({ top: '-100px' }),
        animate('500ms ease-out', style({ top: 0 })),
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ top: '-100px' })),
      ]),
    ]),
  ],
})
export class NavbarComponent {
  public menu = faBars;
  public close = faClose;
  public showDrawer = false;
  public isNavbarVisible = true;

  private isScrolling = false;
  private lastScrollTop = 0;

  public toggleDrawer() {
    this.showDrawer = !this.showDrawer;
  }
  public navigateToSection(sectionId: string) {
    if (sectionId !== 'landing') {
      this.isScrolling = true;
      this.isNavbarVisible = false;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.showDrawer = false;
    setTimeout(() => {
      this.isScrolling = false;
    }, 1000);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop) {
      // Scrolling down
      this.isNavbarVisible = false;
    } else {
      // Scrolling up
      if (!this.isScrolling) this.isNavbarVisible = true;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}
