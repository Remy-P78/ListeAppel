import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './components/result/result.component';
import { PagehomeComponent } from './components/pagehome/pagehome.component';
import { StudentListComponent } from './components/student-list/student-list.component';


const routes: Routes = [
  { path: '', component: PagehomeComponent },
  { path: 'app-result/:id', component: ResultComponent },
  { path: 'student-list', component: StudentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
