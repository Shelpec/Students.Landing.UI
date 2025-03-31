import { Component, OnInit } from '@angular/core';
import { MainFooterComponent } from "../main-footer/main-footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss'],
  imports: [MainFooterComponent, HeaderComponent]
})
export class ApplyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Логика при инициализации, если нужна
  }

  onSubmit() {
    // Логика отправки формы
    console.log('Форма отправлена!');
  }
}
