import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAnoncePageRoutingModule } from './update-anonce-routing.module';

import { UpdateAnoncePage } from './update-anonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAnoncePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [UpdateAnoncePage],
})
export class UpdateAnoncePageModule {}
