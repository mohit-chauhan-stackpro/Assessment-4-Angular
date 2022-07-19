import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assessment-4-Angular';
  gamePlayedTimes:string []=[];

  onGamePlaying(){
    this.gamePlayedTimes.push('GamePlayed')
  }
  // console.log("Head-GamePlayed")
}
