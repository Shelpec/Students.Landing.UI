import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Импорт всех секций лендинга
import { HeroSectionComponent } from '../lending/hero-section/hero-section.component';
import { AboutStatsComponent } from '../lending/about-stats/about-stats.component';
import { StepsComponent } from '../lending/steps/steps.component';
import { OrganizationsComponent } from '../lending/organizations/organizations.component';
import { CallToActionComponent } from '../lending/call-to-action/call-to-action.component';
import { FaqComponent } from '../lending/faq/faq.component';
import { ReviewsComponent } from '../lending/reviews/reviews.component';
import { ContactUsComponent } from '../lending/contact-us/contact-us.component';
import { MainFooterComponent } from '../main-footer/main-footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    AboutStatsComponent,
    StepsComponent,
    OrganizationsComponent,
    CallToActionComponent,
    FaqComponent,
    ReviewsComponent,
    ContactUsComponent,
    MainFooterComponent
  ],
  template: `
    <div id="hero"><app-hero-section></app-hero-section></div>
    <div id="stats"><app-about-stats></app-about-stats></div>
    <div id="steps"><app-steps></app-steps></div>
    <div id="orgs"><app-organizations></app-organizations></div>
    <div id="cta"><app-call-to-action></app-call-to-action></div>
    <div id="faq"><app-faq></app-faq></div>
    <div id="reviews"><app-reviews></app-reviews></div>
    <div id="contact"><app-contact-us></app-contact-us></div>
    <app-main-footer></app-main-footer>
  `
})
export class LandingPageComponent {}
