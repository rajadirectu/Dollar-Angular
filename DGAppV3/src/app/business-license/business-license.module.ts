import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessLicenseRoutingModule } from './business-license-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { HistoryComponent } from './history/history.component';
import { BusinessLicenseComponent } from './business-license/business-license.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    HistoryComponent,
    BusinessLicenseComponent
  ],
  imports: [
    CommonModule,
    BusinessLicenseRoutingModule
  ]
})
export class BusinessLicenseModule { }
