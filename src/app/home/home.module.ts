import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DataGridCompoenent } from './data-grid/data-grid.component';
import { UserPageComponent } from './user-page/user-page.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, HomeRoutingModule, NgbModule],
  declarations: [HomeComponent, DataGridCompoenent, UserPageComponent, MainTitleComponent, NavbarComponent]
})
export class HomeModule {}
