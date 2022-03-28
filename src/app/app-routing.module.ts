import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './registration/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './helper/auth.gaurd';




const routes: Routes = [
  { path: '', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
