import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landingpage/landing-page.component';
import { WizardPageComponent } from './components/wizard-page/wizard-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/landingpage'
  },
  {
    path: 'landingpage',
    component: LandingPageComponent
  },
  {
    path: 'wizard',
    component: WizardPageComponent/*,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'comparators'},
      { path: 'comparators',  component: WizCompPageComponent },
      { path: 'states',  component: WizStatePageComponent },
      { path: 'inputs',  component: WizInputPageComponent },
      { path: 'variables',  component: WizInterPageComponent },
      { path: 'transitions',  component: WizTransPageComponent }
    ]*/
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
