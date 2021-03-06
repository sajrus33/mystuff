import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/index';
import {RegisterComponent} from './register/index';
import {AuthGuard} from './_guards/index';
import {StuffListComponent} from "./stuff-list/stuff-list.component";
import {AddStuffComponent} from "./add-stuff/add-stuff.component";
import {StuffDetailsComponent} from "./stuff-details/stuff-details.component";

const appRoutes: Routes = [
  // {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'stuff/list', component: StuffListComponent, canActivate: [AuthGuard]},
  {path: 'stuff/add', component: AddStuffComponent, canActivate: [AuthGuard]},
  {path: 'stuff/:id', component: StuffDetailsComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  {path: '**', redirectTo: 'stuff/list'}
];

export const routing = RouterModule.forRoot(appRoutes);
