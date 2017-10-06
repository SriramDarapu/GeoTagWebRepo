import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

    token = null;

    serviceData = {
        domain: "http://ec2-34-215-112-156.us-west-2.compute.amazonaws.com:8080/", //"http://localhost:5000/",
        url: {
            registration: "registration",
            otpValidation: "validateOtp",
            profileCompletion: "profileUpdate"
        }
    };

    constructor(private http: Http, private router: Router) {}

    signInUser(data: any) {
        const link = this.serviceData.domain + this.serviceData.url.registration;     
        return this.http.post(link, data).map(
            (response: Response) => {
                return response.json();
            }
        );
    }

    validateOtp(data: any) {
        const link = this.serviceData.domain + this.serviceData.url.otpValidation;
        return this.http.post(link, data).map(
            (response: Response) => {
                return response.json();
            }
        )
    }

    completeProfile(data: any) {
        const link = this.serviceData.domain + this.serviceData.url.profileCompletion+"/"+data.id;
        return this.http.post(link, data).map(
            (response: Response) => {
                this.token = true;
                return response.json();
            }
        )
    }

    logout() {
        this.router.navigate(['registration']);
        return this.token = null;
    }
}