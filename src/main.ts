import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// Подключаем роутинг
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes'; // <-- наши маршруты

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes)
  ]
}).catch(err => console.error(err));
