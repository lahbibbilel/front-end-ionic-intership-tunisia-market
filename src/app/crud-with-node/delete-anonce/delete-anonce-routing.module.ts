import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteAnoncePage } from './delete-anonce.page';

const routes: Routes = [
  {
    path: ':id',
    component: DeleteAnoncePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteAnoncePageRoutingModule {}
