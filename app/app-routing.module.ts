import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
 {path:'login',component:LoginComponent},
{path:'',redirectTo:'login',pathMatch:'full'},
  {path:'table',component:TableComponent},
  {path:'view',component:ViewComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
