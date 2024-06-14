import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { AccountComponent } from './account/account.component';
import { EqualOppurtunityEmployerComponent } from './quick-links/equal-oppurtunity-employer/equal-oppurtunity-employer.component';
import { NonDiscriminationComponent } from './quick-links/non-discrimination/non-discrimination.component';
import { TermsOfUseComponent } from './quick-links/terms-of-use/terms-of-use.component';
import { DoNotSellMyInfoComponent } from './quick-links/do-not-sell-my-info/do-not-sell-my-info.component';
import { PrivacyPolicyComponent } from './quick-links/privacy-policy/privacy-policy.component';

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
