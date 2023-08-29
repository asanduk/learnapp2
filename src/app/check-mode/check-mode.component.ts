import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-check-mode',
  templateUrl: './check-mode.component.html',
  styleUrls: ['./check-mode.component.css']
})
export class CheckModeComponent implements OnInit {
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  selectedAnswers: { [key: number]: string[] } = {};

  fillInAnswer: string = '';

  showResult: boolean = false;
  isCorrect: boolean = false;
  showQuizResults: boolean = false;
  correctCount: number = 0;
  incorrectCount: number = 0;
  skippedCount: number = 0;
  answeredCorrectly: { [key: number]: boolean } = {};
  processing: boolean = false;
  showAnswerRequired: boolean = false;

  finishedQuiz: boolean = false;


  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.questions = this.dataService.getQuestions();
  }

  getCharCode(index: number): string {
    return String.fromCharCode(65 + index);
  }

  getInputType(questionType: string): string {
    return questionType === 'sc' ? 'radio' : questionType === 'mc' ? 'checkbox' : 'text';
  }

  isAnswerSelected(charCode: string): boolean {
    const selectedAnswer = this.selectedAnswers[this.currentQuestionIndex];
    return selectedAnswer && selectedAnswer.includes(charCode);
  }

  toggleAnswer(charCode: string, questionType: string): void {
    this.selectedAnswers[this.currentQuestionIndex] = this.selectedAnswers[this.currentQuestionIndex] || [];

    const index = this.selectedAnswers[this.currentQuestionIndex].indexOf(charCode);
    if (index > -1) {
      this.selectedAnswers[this.currentQuestionIndex].splice(index, 1);
    } else {
      if (questionType === 'mc') {
        this.selectedAnswers[this.currentQuestionIndex].push(charCode);
      } else if (questionType === 'sc') {
        this.selectedAnswers[this.currentQuestionIndex] = [charCode];
      }
    }
  }

  skipQuestion(): void {
    this.skippedCount++;
    this.moveToNextQuestion();
  }

  moveToNextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
    this.resetState();
  }

  moveToPreviousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
    this.resetState();
  }

  checkAnswer(): void {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    const selectedAnswer = this.selectedAnswers[this.currentQuestionIndex];
  
    if (
      (currentQuestion.qtyp === 'fi' && this.fillInAnswer.trim() === '') ||
      (currentQuestion.qtyp === 'mc' && (!selectedAnswer || selectedAnswer.length === 0)) ||
      (currentQuestion.qtyp === 'sc' && (!selectedAnswer || selectedAnswer.length === 0))
    ) {
      this.showAnswerRequired = true;
      return;
    }
    if (currentQuestion.qtyp === 'fi') {
      const userAnswer = this.fillInAnswer.trim().toLowerCase();
      const correctAnswer = currentQuestion.qanswers[0].txt[0].trim().toLowerCase();
  
      this.isCorrect = userAnswer === correctAnswer;
    } else if (currentQuestion.qtyp === 'sc' || currentQuestion.qtyp === 'mc') {
      const correctAnswers = currentQuestion.qcorrect.split('');
      const userAnswers = selectedAnswer || [];
  
      this.isCorrect = correctAnswers.length === userAnswers.length && correctAnswers.every((a: string) => userAnswers.includes(a));
    }
  
    this.showResult = true;
  
    if (this.isCorrect) {
      if (!this.answeredCorrectly[this.currentQuestionIndex]) {
        this.correctCount++;
        this.answeredCorrectly[this.currentQuestionIndex] = true;
      }
      this.processing = true; 
      setTimeout(() => {
        this.processing = false; 
        this.moveToNextQuestion(); 
      }, 2000); 
    } else {
      this.incorrectCount++; 
      this.processing = true; 
      setTimeout(() => {
        this.processing = false; 
        this.moveToPreviousQuestion(); 
      }, 2000); 
    }
  }

  resetState(): void {
    this.showResult = false;
    this.isCorrect = false;
    this.fillInAnswer = '';
    this.showAnswerRequired = false; 

  }

  switchToLearnMode(): void {
    
    this.router.navigate(['/learn']);
  }


  finishQuiz() {
    this.finishedQuiz = true;
  }

}
