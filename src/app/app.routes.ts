import { Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { ShowComponent } from './pages/show/show.component';
import { cognitoGuardGuard } from './guards/cognito.guard';

export const routes: Routes = [
    {path: 'intro', component: IntroComponent},
    {path: 'singin', component: SingInComponent},
    {path: 'singup', component: SingUpComponent},
    {path: 'show', component: ShowComponent, canMatch: [cognitoGuardGuard] },
    {path: '**', pathMatch: 'full', redirectTo: 'intro'}
];
