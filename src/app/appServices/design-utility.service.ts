import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }


  print(content : string, containerId : string) {
    const li = document.createElement('li');
    li.innerText = content;
    document.getElementById(containerId)?.appendChild(li);
  }
}
