import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {

  result : string | unknown;
  public data1!: string | unknown;
  public data2!: string | unknown;
  public data3!: string | unknown;

  constructor() {}

  isDellAvailable() : boolean {
    return false;
  }

  isHpAvailable() : boolean {
    return false;
  }

   dell  = {
    name: 'Dell',
    ram: '8GB',
    color: 'black'
  }

  hp  = {
    name: 'Hp',
    ram: '8GB',
    color: 'black'
  }


   buyLaptop = new Promise((resolve, reject) => {
    if(this.isDellAvailable()) {
      resolve (JSON.stringify(this.dell));
    }
    else if(this.isHpAvailable()) {
      resolve (JSON.stringify(this.hp));
    }
    else {
      reject('I don"t buy laptop');
    }
  });

  solve() : void{
    console.log('Before promise');
  }


  getData1() : void {
      this.data1 = 'Fetching Data....';
      this.buyLaptop.then((data) => {
        this.data1 = data;
        }).catch((error) => {
          this.data1 = error;
        });
  }

  async getData2() : Promise<void> {
    this.data2 = 'Fetching Data....';
    try {
      this.data2 = await this.buyLaptop;
    }
    catch(error) {
      this.data2 = error;
    }
  }

    buyLaptop1 =  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .catch(res => res);

  getData3() : void {
    this.data3 = 'Fetching Data....';
    setTimeout(() => {
      this.buyLaptop1.then
      ((data) => {
        this.data3 = JSON.stringify(data);
        }
      ).catch((error) => {
        this.data3 = error;
      });
    }, 1000);
  }


}
