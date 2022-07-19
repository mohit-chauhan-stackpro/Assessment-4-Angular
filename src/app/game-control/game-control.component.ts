import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gamePlaying=new EventEmitter<{data:string}>();

  constructor() { }

  ngOnInit(): void {
  }
  startTheGame(){
    console.log('Game started')
   setInterval(()=>{this.gamePlaying.emit()},1000)
  }
  stopTheGame(){
    console.log('Game stopped')
    clearInterval()
  }

}
