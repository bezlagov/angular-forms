import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTaskComponent } from './first-task/first-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SecondTaskComponent } from './second-task/second-task.component';
import { ThirdTaskComponent } from './third-task/third-task.component';
import { FourthComponent } from './fourth/fourth.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstTaskComponent,
    SecondTaskComponent,
    ThirdTaskComponent,
    FourthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
