import { Component, ContentChildren, ElementRef, HostListener, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  public arrowDown = faChevronDown;
  public arrowUp = faChevronUp;
  public currentTab: TabComponent | undefined;
  public showDropdownOptions = false;

  constructor(private el: ElementRef) {}

  ngAfterContentInit() {
    const activeTab = this.tabs.find((tab) => tab.active);
    if (!activeTab && this.tabs.first) {
      this.selectTab(0);
    }
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.showDropdownOptions = false;
    }
  }

  toggleDropdownOptions(){
    this.showDropdownOptions = !this.showDropdownOptions;
  }

  selectTab(index: number) {
    this.showDropdownOptions = false;
    this.tabs.toArray().forEach((tab, i) => {
      if(i === index){
        tab.active = true;
        this.currentTab = tab;
      } else {
        tab.active = false;
      }
    });
  }
}
