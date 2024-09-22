import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', component: NavComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'tecnicos', loadChildren: () => import('./components/tecnico/tecnico-list/tecnico-list.module').then((m) => m.TecnicoListModule)}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
