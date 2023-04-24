import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialSetupComponent } from './components/initial-setup/initial-setup.component';
import { PdetailsComponent } from './components/pdetails/pdetails.component';
import { TrainSelectionComponent } from './components/train-selection/train-selection.component';

const routes: Routes = [

  {
    path: '',
    component: InitialSetupComponent
  },

  {
    path: 'pdetails',
    component: PdetailsComponent,
  },

  {
    path: 'train-selection',
    component: TrainSelectionComponent,
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
