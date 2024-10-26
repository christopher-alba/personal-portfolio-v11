import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowTrendUp, faBookOpenReader, faHardHat, faPalette, faTreeCity, faWifiStrong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  public upTrend = faArrowTrendUp;
  public bookReader = faBookOpenReader;
  public trees = faTreeCity;
  public engineer = faHardHat;
  public wifi = faWifiStrong;
  public palette = faPalette;
}
