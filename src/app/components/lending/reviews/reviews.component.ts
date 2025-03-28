import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  reviews = [
    {
      title: 'Бесценный опыт и знания',
      text: 'Благодаря практике я получил реальное представление о работе в IT-сфере, познакомился с профессионалами и даже нашел себе наставника.',
      name: 'Айсултан Ж.',
      role: 'стажер-разработчик',
      photo: 'assets/images/photo.png'
    },
    {
      title: 'Первый шаг в профессию',
      text: 'Практика дала мне уверенность, я поняла, в каком направлении хочу развиваться. Это был старт моего карьерного пути.',
      name: 'Динара М.',
      role: 'аналитик данных',
      photo: 'assets/images/photo.png'
    },
    {
      title: 'От студента к специалисту',
      text: 'Я получил не только навыки, но и приглашение остаться в компании после окончания практики. Это многое значит!',
      name: 'Ернар К.',
      role: 'UX/UI-дизайнер',
      photo: 'assets/images/photo.png'
    }
  ];
}


