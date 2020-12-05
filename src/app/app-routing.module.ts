import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { ShortnerComponent } from './shortner/shortner.component';
import { BigDataComponent } from './big-data/big-data.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component : GithubSearchComponent
  },
  {
    path: 'shortner',
    component : ShortnerComponent
  },
  {
    path: 'bigdata',
    component : BigDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
