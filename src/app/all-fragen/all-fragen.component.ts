import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-fragen',
  templateUrl: './all-fragen.component.html',
  styleUrls: ['./all-fragen.component.css']
})
export class AllFragenComponent implements OnInit {
  questions: any[] = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.questions = this.dataService.getQuestions();
  }

  showAnswer(question: any): void {
    
    question.showCorrectAnswers = !question.showCorrectAnswers;
  }
}
