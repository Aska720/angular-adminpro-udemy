import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent
  ],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent
  ]
})
export class SharedModule { }
