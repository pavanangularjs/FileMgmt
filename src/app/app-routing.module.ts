import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FilesComponent } from './files/files.component';
import { NewFileComponent } from './new-file/new-file.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceDashboardComponent } from './service-dashboard/service-dashboard.component';
import { ResourcesComponent } from './resources/resources.component';
import { CustomerDocsComponent } from './customer-docs/customer-docs.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'files', component: FilesComponent },
  { path: 'create-new', component: NewFileComponent },
  { path: 'service-dashboard', component: ServiceDashboardComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'customer-docs', component: CustomerDocsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
