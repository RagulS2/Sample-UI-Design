import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,InputTextModule,ButtonModule,FormsModule,TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
