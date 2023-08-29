import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnModeComponent } from './learn-mode/learn-mode.component';
import { CheckModeComponent } from './check-mode/check-mode.component';
import { ExamModeComponent } from './exam-mode/exam-mode.component';
import { HomeComponent } from './home/home.component';
import { AllFragenComponent } from './all-fragen/all-fragen.component'; // Doğru import yolu olduğundan emin olun


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'learn', component: LearnModeComponent },
  { path: 'check', component: CheckModeComponent },
  { path: 'exam', component: ExamModeComponent },
  { path: 'alle-fragen', component: AllFragenComponent },
  { path: 'learn-mode/:qid', component: LearnModeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
