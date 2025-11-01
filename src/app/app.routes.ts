import { Routes } from '@angular/router';
import { PageNotFound } from './componentes/page-not-found/page-not-found';
import { UserList } from './componentes/user-list/user-list';
import { UserContainer } from './componentes/user-container/user-container';

export const routes: Routes = [
  { path: '', redirectTo: '/users-list', pathMatch: 'full' },
  { path: 'users-list', title: 'Lista de Usuários', component: UserList },
  { path: 'user/:userId', title: 'Área do Usuário', component: UserContainer },
  { path: '**', title: 'Página Não Encontrada', component: PageNotFound }
];
