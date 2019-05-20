import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BinarySearchInArrComponent} from './binary-search-in-arr/binary-search-in-arr.component';

const routes: Routes = [
  { path: 'BinarySearchInArrComponent', component: BinarySearchInArrComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
