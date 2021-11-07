import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProgressBar';

  nPB: boolean = false; 
  progressValue:any;

  @Input() value = 35;
  @Input() label = '';
  @Input() max = 100;
  @Output() progressClick = new EventEmitter();

  onChange() {
    console.log("Progress is " + this.progressValue +"%")
  }
  showPB(value: number){
    this.nPB=false;    
    value ==1 ? this.nPB=true : value ==2
  }
  constructor() { }

  ngOnInit(): void {
  }
  
  onClick() {
    this.progressClick.emit(this.value);
    this.progressValue = this.value;
    console.log("Progress is " + this.progressValue +"%")
  }

  
}
