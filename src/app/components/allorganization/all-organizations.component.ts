import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFooterComponent } from '../main-footer/main-footer.component';

@Component({
  selector: 'app-all-organizations',
  standalone: true,
  imports: [CommonModule, MainFooterComponent],
  templateUrl: './all-organizations.component.html',
  styleUrls: ['./all-organizations.component.scss']
})
export class AllOrganizationsComponent {
  // Можно добавить логику поиска, фильтрации и т.д.
}
