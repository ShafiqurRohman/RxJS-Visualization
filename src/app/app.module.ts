import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavberComponent } from './navber/navber.component';
import { FooterComponent } from './footer/footer.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './RxJS/observable/observable.component';
import { ListComponent } from './RxJS/observable/list/list.component';
import { FromEventComponent } from './RxJS/observable/from-event/from-event.component';
import { IntervalComponent } from './RxJS/observable/interval/interval.component';
import { OfFormComponent } from './RxJS/observable/of-form/of-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavberComponent,
    FooterComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
