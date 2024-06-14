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
import { EqualOppurtunityEmployerComponent } from './quick-links/equal-oppurtunity-employer/equal-oppurtunity-employer.component';
import { NonDiscriminationComponent } from './quick-links/non-discrimination/non-discrimination.component';
import { TermsOfUseComponent } from './quick-links/terms-of-use/terms-of-use.component';
import { DoNotSellMyInfoComponent } from './quick-links/do-not-sell-my-info/do-not-sell-my-info.component';
import { PrivacyPolicyComponent } from './quick-links/privacy-policy/privacy-policy.component';


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
