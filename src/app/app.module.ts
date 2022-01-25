import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageViewComponent } from './views/homepage-view/homepage-view.component';
import { SlideComponent } from './components/slide/slide.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { TextOnImageComponent } from './components/text-on-image/text-on-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageViewComponent,
    SlideComponent,
    TextOnImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
