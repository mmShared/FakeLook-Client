import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

const routes: Routes = [
  { path: '',component: AuthLayoutComponent,children:[
    { path: 'login' , component: LoginComponent},
    { path: '',redirectTo: 'login',pathMatch: 'full'},
    { path: 'register', component: RegisterComponent }
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}