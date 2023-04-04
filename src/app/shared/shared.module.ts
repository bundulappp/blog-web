import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HttpClientModule, ToastrModule.forRoot()],
  exports: [HttpClientModule, HeaderComponent],
})
export class SharedModule {}
