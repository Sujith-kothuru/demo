import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapingComponent } from './maping/maping.component';

export const routes: Routes = [
    {
        path:'login',component:LoginComponent
    },
    {
        path:'maping',component:MapingComponent
    }
];
