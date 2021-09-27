import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddButtonComponent } from './core/components/shared/add-button/add-button.component';
import { BoardComponent } from './core/components/board-components/board/board.component';
import { TaskComponent } from './core/components/board-components/task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TaskComponent,
    AddButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
