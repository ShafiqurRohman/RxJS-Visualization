import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import * as $ from 'jquery';

import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-form',
  templateUrl: './of-form.component.html',
  styleUrls: ['./of-form.component.css']
})
export class OfFormComponent implements OnInit {

  constructor(
    private designUtilityService : DesignUtilityService
  ) { }

  ngOnInit(): void {
    const ar = ['Rafiq', 'Shafiq', 'Sharif'];

    const obs1 = of('Rafiq', 'Shafiq', 'Sharif');
    obs1.subscribe((res)=> {
      this.designUtilityService.print(res, 'ofUl');
    });


    const obs2 = from(ar);
    obs2.subscribe((res)=> {
      this.designUtilityService.print(res, 'fromUl');
    });
  }
 
}
