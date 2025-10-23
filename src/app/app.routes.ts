import { Routes } from '@angular/router';
import { LoginComponent } from './Authentication/SignIn/login.component/login.component';
import { Registration } from './Authentication/Signup/registration/registration';   
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'registration',component:Registration},
    {path:'dashboard',component:Dashboard},
    {path:'**', redirectTo:'login'}
];
