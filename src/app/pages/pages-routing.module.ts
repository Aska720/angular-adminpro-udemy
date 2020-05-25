import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { ChartsComponent } from './charts/charts.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dasboard', description: 'This is the dasboard page' } },
      { path: 'progress', component: ProgressComponent, data: { title: 'Progress', description: 'This is the progress page' } },
      { path: 'charts', component: ChartsComponent, data: { title: 'Charts', description: 'This is the charts page' } },
      { path: 'promises', component: PromisesComponent, data: { title: 'Promises', description: 'This is the promises page' } },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs', description: 'This is the RxJs page' } },
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Account settings', description: 'This is the account settings page' } },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
