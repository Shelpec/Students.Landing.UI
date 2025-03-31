import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Company {
  id: string;
  name: string;
  description: string;
  address: string;
  contactPhone: string;
  websiteUrl: string;
  // Если нужно, добавь поля тут
  // companyDirections: any[];
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'https://localhost:44300/api/Companies';

  constructor(private http: HttpClient) {}

  // Получаем список компаний
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }
}
