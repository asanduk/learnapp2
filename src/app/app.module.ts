import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnModeComponent } from './learn-mode/learn-mode.component';
import { CheckModeComponent } from './check-mode/check-mode.component';
import { ExamModeComponent } from './exam-mode/exam-mode.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AllFragenComponent } from './all-fragen/all-fragen.component';
import { DataService } from './data.service'; 



@NgModule({
  declarations: [
    AppComponent,
    LearnModeComponent,
    CheckModeComponent,
    ExamModeComponent,
    HeaderComponent,
    HomeComponent,
    AllFragenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
