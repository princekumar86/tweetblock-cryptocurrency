import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FilterPipe} from './filter.pipe';

import { DataService } from './data.service';
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { SocialcallbackService } from './_services/socialcallback.service';
import { UserService } from './_services/user.service';
import { StreamtweetsService } from './_services/streamtweets.service'

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FbcallbackComponent } from './pages/fbcallback/fbcallback.component';
import { TwittercallbackComponent } from './pages/twittercallback/twittercallback.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { GooglecallbackComponent } from './pages/googlecallback/googlecallback.component';
import { LinkedincallbackComponent } from './pages/linkedincallback/linkedincallback.component';
import { TwitterwallComponent } from './pages/twitterwall/twitterwall.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'fbcallback', component: FbcallbackComponent },
  { path: 'twittercallback', component: TwittercallbackComponent },
  { path: 'googlecallback', component: GooglecallbackComponent },
  { path: 'linkedincallback', component: LinkedincallbackComponent },
  { path: 'twitterwall', component: TwitterwallComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '*', component: PageNotFoundComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    SettingsComponent,
    FbcallbackComponent,
    TwittercallbackComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
    GooglecallbackComponent,
    LinkedincallbackComponent,
    TwitterwallComponent,
    FilterPipe 
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService, 
    AuthGuard,
    AuthenticationService,
    SocialcallbackService,
    StreamtweetsService,
    UserService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
