import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ListAwesomeComponent } from './list-awesome/list-awesome.component';
import { CreateAwesomeComponent } from './create-awesome/create-awesome.component';
import { EditAwesomeComponent } from './edit-awesome/edit-awesome.component';
import { DeleteAwesomeComponent } from './delete-awesome/delete-awesome.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAwesomeComponent,
    CreateAwesomeComponent,
    EditAwesomeComponent,
    DeleteAwesomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
