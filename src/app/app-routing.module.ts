import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchBoxComponent } from './search-box/search-box.component';

const routes: Routes = [
  {
    path:'dashboard',component:DashboardComponent
  },

  {
    path:'',component:LoginComponent
  },
  {
   path:'registration',component:RegisterComponent
  },
  {
    path:'searchBox',component:SearchBoxComponent
   }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
