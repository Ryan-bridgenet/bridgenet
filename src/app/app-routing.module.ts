import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { AccountComponent } from './account/account.component';
import { EqualOppurtunityEmployerComponent } from './compliance/equal-oppurtunity-employer/equal-oppurtunity-employer.component';
import { NonDiscriminationComponent } from './compliance/non-discrimination/non-discrimination.component';
import { TermsOfUseComponent } from './compliance/terms-of-use/terms-of-use.component';
import { DoNotSellMyInfoComponent } from './compliance/do-not-sell-my-info/do-not-sell-my-info.component';
import { PrivacyPolicyComponent } from './compliance/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'account', component: AccountComponent },
  { path: 'equal-oppurtunity', component: EqualOppurtunityEmployerComponent },
  { path: 'non-discrimination', component: NonDiscriminationComponent},
  { path: 'terms-of-use', component: TermsOfUseComponent},
  { path: 'do-not-sell-my-info', component: DoNotSellMyInfoComponent}, 
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
