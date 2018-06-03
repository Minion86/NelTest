import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsHomePage } from './details-home';

@NgModule({
  declarations: [
    DetailsHomePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsHomePage),
  ],
})
export class DetailsHomePageModule {}
