import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './RxJS/observable/observable.component';
import { ListComponent } from './RxJS/observable/list/list.component';
import { FromEventComponent } from './RxJS/observable/from-event/from-event.component';
import { IntervalComponent } from './RxJS/observable/interval/interval.component';
import { OfFormComponent } from './RxJS/observable/of-form/of-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PromiseComponent },
  { path: 'rxjs', component: ObservableComponent ,
    children: [
      { path: '', component: ListComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of-from', component: OfFormComponent },
    ]
  },
  { path: '**', component: PromiseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
