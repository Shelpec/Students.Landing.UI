import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFooterComponent } from '../main-footer/main-footer.component';
import { Company, CompanyService } from '../../services/company.service';
import { HeaderComponent } from "../header/header.component";
// Импортируем наш сервис + интерфейс

@Component({
  selector: 'app-all-organizations',
  standalone: true,
  imports: [CommonModule, MainFooterComponent, HeaderComponent],
  templateUrl: './all-organizations.component.html',
  styleUrls: ['./all-organizations.component.scss']
})
export class AllOrganizationsComponent implements OnInit {
  // Храним список компаний
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    // Когда компонент загружается, грузим с бэка
    this.companyService.getCompanies().subscribe({
      next: (data) => {
        this.companies = data;
      },
      error: (err) => {
        console.error('Ошибка при загрузке компаний', err);
      }
    });
  }
}
