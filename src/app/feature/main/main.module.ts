import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
  declarations: [MainComponent, BlogListComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
