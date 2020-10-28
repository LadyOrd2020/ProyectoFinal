import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CalendarioPage } from './calendario.page';

import { CalendarioPageRoutingModule } from './calendario-routing.module';

import {registerLocaleData} from '@angular/common';
import  localeDe  from '@angular/common/locales/de';
import { CalModalPageModule } from '../cal-modal/cal-modal.module';
registerLocaleData(localeDe);
import { ComponentsModule } from '../../components/components.module';
import { NgCalendarModule } from 'ionic2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioPageRoutingModule,
    NgCalendarModule,
    CalModalPageModule,
    ComponentsModule
  ],
  declarations: [CalendarioPage],
  providers:[
    {
      provide: LOCALE_ID, useValue: 'de-DE' }
  ]
})
export class CalendarioPageModule {}
