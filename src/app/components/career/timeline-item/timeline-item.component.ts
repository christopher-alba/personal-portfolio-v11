import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-item.component.html',
  styleUrl: './timeline-item.component.scss'
})
export class TimelineItemComponent {
  @Input() startDate!: string;
  @Input() endDate!: string;
  @Input() role!: string;
  @Input() company!: string;
  @Input() summary!: string;
  @Input() technologies!: string[];
}
