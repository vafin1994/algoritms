import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { BinarySearchInArrComponent } from './binary-search-in-arr/binary-search-in-arr.component';
import {MatButtonModule, MatToolbarModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        BinarySearchInArrComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
