import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BinarySearchInArrComponent} from './binary-search-in-arr/binary-search-in-arr.component';
import {SelectionSortComponent} from './selection-sort/selection-sort.component';
import {TestComponent} from './test/test.component';

const routes: Routes = [
  {path: 'BinarySearchInArrComponent', component: BinarySearchInArrComponent},
  {path: 'SelectionSort', component: SelectionSortComponent},
  {path: 'test', component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
