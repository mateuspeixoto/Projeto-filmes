import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  // Se a rota for '', redireciona para 'login'. 'pathMatch: full' garante que apenas rotas vazias serão redirecionadas.
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Se a rota for 'login', o componente LoginComponent será carregado.
  { path: 'login', component: LoginComponent },

  // Se a rota for 'home', o componente HomeComponent será carregado.
  { path: 'home', component: HomeComponent },

  // Se a rota for 'movie/:type/:id', o componente MovieComponent será carregado.
  // Aqui, ':type' e ':id' são parâmetros de rota que serão passados para o componente MovieComponent.
  { path: 'movie/:type/:id', component: MovieComponent },

  // Se a rota não corresponder a nenhuma das rotas definidas acima, o componente LoginComponent será carregado.
  // Isso é útil para lidar com rotas não reconhecidas.
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
