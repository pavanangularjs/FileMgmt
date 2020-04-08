import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FilesComponent } from './files/files.component';
import { NewFileComponent } from './new-file/new-file.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceDashboardComponent } from './service-dashboard/service-dashboard.component';
import { ResourcesComponent } from './resources/resources.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CustomerDocsComponent } from './customer-docs/customer-docs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FilesComponent,
    NewFileComponent,
    DashboardComponent,
    ServiceDashboardComponent,
    ResourcesComponent,
    HomeComponent,
    HeaderComponent,
    CustomerDocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
