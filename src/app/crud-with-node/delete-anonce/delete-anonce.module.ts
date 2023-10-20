import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteAnoncePageRoutingModule } from './delete-anonce-routing.module';

import { DeleteAnoncePage } from './delete-anonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteAnoncePageRoutingModule
  ],
  declarations: [DeleteAnoncePage]
})
export class DeleteAnoncePageModule {}
