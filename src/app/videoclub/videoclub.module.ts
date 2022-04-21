import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoclubPageRoutingModule } from './videoclub-routing.module';

import { VideoclubPage } from './videoclub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoclubPageRoutingModule
  ],
  declarations: [VideoclubPage]
})
export class VideoclubPageModule {}
