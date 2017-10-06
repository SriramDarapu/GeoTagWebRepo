import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from "./registration/registration.component";
import { OtpVerificationComponent } from "./otp-verification/otp-verification.component";
import { ProfileComponent } from "./profile/profile.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
    {
        path: '', component: RegistrationComponent
    },
    {
        path: 'registration', component: RegistrationComponent
    },
    {
        path: 'otpVerification', component: OtpVerificationComponent
    },
    {
        path: 'profileCompletion', component: ProfileComponent
    },
    {
        path: 'home', component: HomeComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}