import { Routes } from '@angular/router';

import { LoginComponent } from './SignIn/login.component/login.component';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:Dashboard},
    {path:'**', redirectTo:'login'}
];
