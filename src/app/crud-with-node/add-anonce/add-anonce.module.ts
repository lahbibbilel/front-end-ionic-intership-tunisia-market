import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAnoncePageRoutingModule } from './add-anonce-routing.module';

import { AddAnoncePage } from './add-anonce.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAnoncePageRoutingModule,
    ReactiveFormsModule, // Assurez-vous d'ajouter ceci
  ],
  declarations: [AddAnoncePage],
})
export class AddAnoncePageModule {}
