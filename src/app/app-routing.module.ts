import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component"
import  { NotFoundComponent } from "./components/not-found/not-found.component"
import { AuthGuard } from './guard/auth.guard';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent},
  {
    canActivate: [AuthGuard],
    path: 'admin',
    loadChildren: () =>
      import('./module/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
