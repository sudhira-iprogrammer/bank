import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerifyComponent } from './verify/verify.component';
import { HomeComponent } from './home/home.component';
import { Step1Component } from './home/step1/step1.component';
import { Step2Component } from './home/step2/step2.component';
import { Step3Component } from './home/step3/step3.component';
import { Step4Component } from './home/step4/step4.component';
import { Step5Component } from './home/step5/step5.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BankInfoService } from './app-service/bank-info.service';
import { AuthGuard } from './auth.guard';


const appRoutes:Routes=[
  {path:'',component:VerifyComponent},
  {path:'verify',component:VerifyComponent},
  {path:'home',component:HomeComponent,children:[
    {path:'step1',component:Step1Component},
    {path:'step2',component:Step2Component},
    {path:'step3',component:Step3Component},
    {path:'step4',component:Step4Component},
    {path:'step5',component:Step5Component},
  ]},

]


@NgModule({
  declarations: [
    AppComponent,
    VerifyComponent,
    HomeComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BankInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
