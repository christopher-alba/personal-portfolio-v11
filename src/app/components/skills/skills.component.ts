import { Component } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabsComponent } from '../tabs/tabs.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TechnicalComponent } from './technical/technical.component';
import { SoftComponent } from './soft/soft.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    TabComponent,
    TabsComponent,
    TechnologiesComponent,
    TechnicalComponent,
    SoftComponent,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {}
