import { Routes } from '@angular/router';
import { Cancer } from './components/cancer/cancer';

export const routes: Routes = [
    { path: '', redirectTo: 'cancer', pathMatch: 'full' },
    { path: 'cancer', component:Cancer},
];
