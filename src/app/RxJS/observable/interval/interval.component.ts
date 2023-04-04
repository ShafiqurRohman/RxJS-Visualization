import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {


  videoSubscription! : Subscription;
  musicSubscription! : Subscription;

  constructor(
    private designUtilityService : DesignUtilityService
  ) { }

  ngOnInit(): void {
    // interval take one parameter which is interval
      const broadcastVideos = interval(1000);
      this.videoSubscription = broadcastVideos.subscribe((res)=> {
        let msg = 'Video - ' + (res + 1);
        this.designUtilityService.print(msg, 'intervalUl');
        if(res >= 4){
          this.videoSubscription.unsubscribe();
        }
      });
      // timer take tow parameters first is initial delay and second is interval
      const broadcastMusic = timer(6000, 1000);
      this.musicSubscription = broadcastMusic.subscribe((res)=> {
        let msg = 'Music - ' + (res + 1);
        this.designUtilityService.print(msg, 'timeUl');
        if(res >= 4){
          this.musicSubscription.unsubscribe();
        }
      });
  }

}

