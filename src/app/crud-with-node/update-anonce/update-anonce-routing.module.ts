import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAnoncePage } from './update-anonce.page';

const routes: Routes = [
  {
    path: ':id', // Route parameter
    component: UpdateAnoncePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAnoncePageRoutingModule {}
