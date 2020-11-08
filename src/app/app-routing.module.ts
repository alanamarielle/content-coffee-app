import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessPlanComponent } from './business-plan/business-plan.component';
const routes: Routes = [
  { path: 'business-plan', component: BusinessPlanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
