import {AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements AfterViewInit  {

  @ViewChild('addBtn')addBtn!: ElementRef;
  count : number = 1;

  constructor(
    private designUtilityService : DesignUtilityService
  ) { }

  ngAfterViewInit(): void {
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res)=> {
        let video = 'Video - ' + this.count;
        let music = 'Music - ' + this.count++;
        this.designUtilityService.print(video, 'videoUl');
        this.designUtilityService.print(music, 'MusicUl')
    });
  }


  
}


