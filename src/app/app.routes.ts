import { Routes } from '@angular/router';
import { UsersCardComponent } from './pages/users-card/users-card.component';

export const routes: Routes = [
    { path: 'users', component: UsersCardComponent },  
    { path: '', redirectTo: 'users', pathMatch: 'full' }
];
