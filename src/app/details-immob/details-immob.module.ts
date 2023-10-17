import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsImmobPageRoutingModule } from './details-immob-routing.module';

import { DetailsImmobPage } from './details-immob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsImmobPageRoutingModule
  ],
  declarations: [DetailsImmobPage]
})
export class DetailsImmobPageModule {}
