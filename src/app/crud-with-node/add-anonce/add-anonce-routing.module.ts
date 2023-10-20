import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAnoncePage } from './add-anonce.page';

const routes: Routes = [
  {
    path: '',
    component: AddAnoncePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAnoncePageRoutingModule {}
