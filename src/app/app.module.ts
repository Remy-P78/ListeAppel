import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './components/shared.service';
import { StudentListComponent } from './components/student-list/student-list.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { ResultComponent } from './components/result/result.component';
import { PagehomeComponent } from './components/pagehome/pagehome.component';

// const routes: Routes = [
//   { path: '', redirectTo: "http://localhost:4200/"},
//   { path: 'app-result/:id', component: ResultComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CalendrierComponent,
    ResultComponent,
    PagehomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
