import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogItemComponent } from './blog-list/blog-item/blog-item.component';

@NgModule({
  declarations: [MainComponent, BlogListComponent, BlogItemComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
