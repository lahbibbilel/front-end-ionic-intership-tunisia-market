import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsImmobPage } from './details-immob.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsImmobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsImmobPageRoutingModule {}
