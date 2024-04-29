import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollToTopService } from './shared/util/ScrollToTopService';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }),
  ],
  exports: [RouterModule],
  providers: [ScrollToTopService],
})
export class AppRoutingModule { }
