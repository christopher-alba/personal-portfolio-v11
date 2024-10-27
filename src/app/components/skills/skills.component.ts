import { Component } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabsComponent } from '../tabs/tabs.component';
import { TechnologiesComponent } from './technologies/technologies.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TabComponent, TabsComponent, TechnologiesComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {}
