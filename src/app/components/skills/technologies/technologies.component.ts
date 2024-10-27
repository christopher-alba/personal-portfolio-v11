import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  public star = faStar;
  public techData = [
    {
      name: 'ASP.NET C#',
      comfortRating: 5,
      usedAtWork: true,
      usedAsHobby: true,
    },
    {
      name: 'Angular',
      comfortRating: 5,
      usedAtWork: true,
      usedAsHobby: true,
    },
    {
      name: 'React',
      comfortRating: 5,
      usedAtWork: false,
      usedAsHobby: true,
    },
    {
      name: 'Typescript',
      comfortRating: 5,
      usedAtWork: true,
      usedAsHobby: true,
    },
    {
      name: 'HTML',
      comfortRating: 5,
      usedAtWork: true,
      usedAsHobby: true,
    },
    {
      name: 'Javascript',
      comfortRating: 5,
      usedAtWork: false,
      usedAsHobby: true,
    },
    {
      name: 'CSS',
      comfortRating: 5,
      usedAtWork: true,
      usedAsHobby: true,
    },
    {
      name: 'C++',
      comfortRating: 2,
      usedAtWork: false,
      usedAsHobby: false,
    },
    {
      name: 'C',
      comfortRating: 3,
      usedAtWork: false,
      usedAsHobby: false,
    },
    {
      name: 'VHDL',
      comfortRating: 2,
      usedAtWork: false,
      usedAsHobby: false,
    },
    {
      name: 'Postgresql',
      comfortRating: 4,
      usedAtWork: true,
      usedAsHobby: true,
    },
    {
      name: 'MongoDB',
      comfortRating: 4,
      usedAtWork: false,
      usedAsHobby: true,
    },
    {
      name: 'Java',
      comfortRating: 4,
      usedAtWork: true,
      usedAsHobby: true,
    },
    {
      name: 'AWS',
      comfortRating: 3,
      usedAtWork: true,
      usedAsHobby: true,
    },
  ];
}
