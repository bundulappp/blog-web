import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavLinksMobComponent } from './header/nav-links-mob/nav-links-mob.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@NgModule({
  declarations: [HeaderComponent, NavBarComponent, NavLinksMobComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
  ],
  exports: [
    HttpClientModule,
    HeaderComponent,
    NavBarComponent,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
  ],
})
export class SharedModule {}
