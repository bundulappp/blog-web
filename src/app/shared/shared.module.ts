import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavLinksMobComponent } from './header/nav-links-mob/nav-links-mob.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavBarComponent, NavLinksMobComponent],
  imports: [CommonModule, HttpClientModule, ToastrModule.forRoot()],
  exports: [
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
  ],
})
export class SharedModule {}
