import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedLayoutComponent } from './feed-layout/feed-layout.component';
import { FeedMapComponent } from './feed-map/feed-map.component';
import { FeedContinuousComponent } from './feed-continuous/feed-continuous.component';
import { AuthGuard } from '../authentication/guards/auth.guard';

const routes: Routes = [
  { 
    path :'' , component: FeedLayoutComponent,
    canActivate: [AuthGuard],
    children: [
    { path: 'map', component: FeedMapComponent},
    { path: 'continuous', component: FeedContinuousComponent},
    { path: '', redirectTo: 'map' ,pathMatch: 'full'}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule {}