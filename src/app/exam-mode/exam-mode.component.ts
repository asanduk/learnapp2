import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-exam-mode',
  templateUrl: './exam-mode.component.html',
  styleUrls: ['./exam-mode.component.css']
})
export class ExamModeComponent implements OnInit {
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
  bittidegeri: boolean = false;
  showSettings: boolean = false;
  showConfirmation: boolean = false;

  answeredIncorrectly: { [key: number]: boolean } = {}; 


   
   selectedQuestionCount: number = 0;
   selectedQuestionType: string = 'all';

  constructor(private dataService: DataService) { }

   ngOnInit(): void {
    this.questions = this.dataService.getQuestions();
  }

  applySettingsWithDelay(): void {
    this.showConfirmation = true;
    setTimeout(() => {
      this.showConfirmation = false;
      if (this.selectedQuestionType === 'all') {
        this.questions = this.dataService.loadAllQuestions(this.selectedQuestionCount);
      } else {
        this.applySettings();
      }
      this.showSettings = false;
    }, 3000);
  }

  applySettings(): void {
    
    if (this.selectedQuestionCount > 0 && this.selectedQuestionType) {
      
      this.questions = this.dataService.loadQuestionsWithSettings(this.selectedQuestionCount, this.selectedQuestionType);
    } else {
      
      console.log("Lütfen gerekli ayarları seçiniz.");
      return;
    }
  
    
    this.currentQuestionIndex = 0;
    this.selectedAnswers = {};
    this.fillInAnswer = '';
    this.showResult = false;
    this.isCorrect = false;
    this.showQuizResults = false;
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.skippedCount = 0;
    this.answeredCorrectly = {};
    this.processing = false;
    this.showAnswerRequired = false;
    this.bittidegeri = false;
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

  toggleSettings(): void {
    this.showSettings = !this.showSettings;
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
  }
  

 nextQuestion(): void {
  const currentQuestion = this.questions[this.currentQuestionIndex];
  const selectedAnswer = this.selectedAnswers[this.currentQuestionIndex];

  if (
    (currentQuestion.qtyp === 'fi' && this.fillInAnswer.trim() === '') ||
    (currentQuestion.qtyp === 'mc' && (!selectedAnswer || selectedAnswer.length === 0)) ||
    (currentQuestion.qtyp === 'sc' && (!selectedAnswer || selectedAnswer.length === 0))
  ) {
    this.skippedCount++;
    this.moveToNextQuestion();
  } else {
    this.checkAnswer();
  }
}

checkAnswer(): void {
  const currentQuestion = this.questions[this.currentQuestionIndex];
  const selectedAnswer = this.selectedAnswers[this.currentQuestionIndex];

  if (currentQuestion.qtyp === 'fi') {
    const userAnswer = this.fillInAnswer.trim().toLowerCase();
    const correctAnswer = currentQuestion.qanswers[0].txt[0].trim().toLowerCase();

    this.isCorrect = userAnswer === correctAnswer;
  } else if (currentQuestion.qtyp === 'sc' || currentQuestion.qtyp === 'mc') {
    const correctAnswers = currentQuestion.qcorrect.split('');
    const userAnswers = selectedAnswer || [];

    this.isCorrect = correctAnswers.length === userAnswers.length && correctAnswers.every((a: string) => userAnswers.includes(a));
  }

  if (!this.answeredCorrectly[this.currentQuestionIndex]) {
    if (this.isCorrect) {
      this.correctCount++;
      this.answeredCorrectly[this.currentQuestionIndex] = true;
    } else {
      this.incorrectCount++;
      this.answeredIncorrectly[this.currentQuestionIndex] = true; 
    }
  }

  this.moveToNextQuestion();
}

  resetState(): void {
    this.showResult = false;
    this.isCorrect = false;
    this.fillInAnswer = '';

  }

  switchToLearnMode(): void {
    
  }

  finishExam(): void {
    this.nextQuestion();
    this.showQuizResults = true;
  }

  bitti(): void {
    if (this.incorrectCount / this.questions.length >= 0.2) { 
      this.bittidegeri = true;
    }
  }

  nextQuestionAndBitti(): void {
    this.nextQuestion();
    this.bitti();
  }

  


}
