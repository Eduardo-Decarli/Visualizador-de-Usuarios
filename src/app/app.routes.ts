import { Routes } from '@angular/router';
import { PageNotFound } from './componentes/page-not-found/page-not-found';
import { UserList } from './componentes/user-list/user-list';

export const routes: Routes = [
  { path: '', redirectTo: '/users-list', pathMatch: 'full' },
  { path: 'users-list', title: 'Lista de Usuários', component: UserList },
  { path: '**', title: 'Página Não Encontrada', component: PageNotFound}
];
