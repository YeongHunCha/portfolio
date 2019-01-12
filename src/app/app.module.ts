import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { WorksComponent } from './components/works/works.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoverComponent } from './components/cover/cover.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';

// detail components
import { CmncComponent } from './components/details/cmnc/cmnc.component';
import { AcbookComponent } from './components/details/acbook/acbook.component';
import { HouseComponent } from './components/details/house/house.component';
import { OfflinemapsComponent } from './components/details/offlinemaps/offlinemaps.component';
import { CityComponent } from './components/details/city/city.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'detail/communicon', component: CmncComponent },
  { path: 'detail/accountbook', component: AcbookComponent },
  { path: 'detail/house', component: HouseComponent },
  { path: 'detail/offlinemaps', component: OfflinemapsComponent },
  { path: 'detail/city', component: CityComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    WorksComponent,
    ContactComponent,
    CoverComponent,
    FooterComponent,
    CmncComponent,
    AcbookComponent,
    HouseComponent,
    OfflinemapsComponent,
    CityComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
