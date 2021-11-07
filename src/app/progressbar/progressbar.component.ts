import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  nPB: boolean = false;    
 
  showPB(value: number){      
    this.nPB=false;    
   
    value ==1 ? this.nPB=true : value ==2
      
  }    

  @Input() value: any;
  @Input() label: any;
  @Input() max: any;
  @Output() progressClick = new EventEmitter();

  onClick() {
    this.progressClick.emit(this.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
