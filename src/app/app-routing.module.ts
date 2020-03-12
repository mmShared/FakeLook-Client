import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedModule } from './feed/feed.module';

const routes: Routes = [
  {
    path: 'feed', loadChildren: () =>
    import('./feed/feed.module').then(mod => mod.FeedModule)
  },
  { path: '', redirectTo:'feed', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
