import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { AccountComponent } from './account/account.component';
import { NavbarComponent } from './navbar/navbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ServiceListComponent } from './service-list/service-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { EqualOppurtunityEmployerComponent } from './compliance/equal-oppurtunity-employer/equal-oppurtunity-employer.component';
import { NonDiscriminationComponent } from './compliance/non-discrimination/non-discrimination.component';
import { TermsOfUseComponent } from './compliance/terms-of-use/terms-of-use.component';
import { DoNotSellMyInfoComponent } from './compliance/do-not-sell-my-info/do-not-sell-my-info.component';
import { PrivacyPolicyComponent } from './compliance/privacy-policy/privacy-policy.component';
import { WhyFiberComponent } from './quick-links/why-fiber/why-fiber.component';
import { HeaderComponent } from './header/header.component';
import { FaqComponent } from './quick-links/faq/faq.component';
import { JobsComponent } from './quick-links/jobs/jobs.component';
import { ContractorsComponent } from './quick-links/contractors/contractors.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ServiceComponent,
    AccountComponent,
    NavbarComponent,
    ServiceListComponent,
    FooterComponent,
    EqualOppurtunityEmployerComponent,
    NonDiscriminationComponent,
    TermsOfUseComponent,
    DoNotSellMyInfoComponent,
    PrivacyPolicyComponent,
    WhyFiberComponent,
    HeaderComponent,
    FaqComponent,
    JobsComponent,
    ContractorsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
