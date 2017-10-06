// import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
// import { Geolocation } from '@ionic-native/geolocation';

export class UserDataService {
    userData = {
        id: '',
        name: '',
        phone: '',
        email: '',
        location: '',
        range: '',
        businessCategory: ''
    };

    imageData = '';
    isRegistered = null;

    // constructor(
    //     private geolocation: Geolocation,
    //     private nativeGeocoder: NativeGeocoder
    // ) {}

    setUserData(data: any) {
        this.userData['id'] = data._id;
        this.userData['name'] = data.business_name;
        this.userData['phone'] = data.phone;
        this.userData['email'] = data.email;
        this.userData['location'] = data.location;
        this.userData['range'] = data.range;
        this.userData['businessCategory'] = data.business_ctgry;
    }

    setImageData(image: string) {
        this.imageData = image;
    }

    setRegisteredToken(val: boolean) {
        this.isRegistered = val;
    }

    getUserData() {
        return this.userData;
    }

    getImageData() {
        return this.imageData;
    }

    getRegisteredToken() {
        return this.isRegistered;
    }

    // getCurrentLocation() {
    //     this.geolocation.getCurrentPosition().then((resp) => {
    //     // resp.coords.latitude
    //     // resp.coords.longitude
    //     this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
    //         .then((result: NativeGeocoderReverseResult) => {
    //             const location = JSON.stringify(result)
    //             console.log(location);
    //             return result;
    //         })
    //         .catch((error: any) => console.log(error));
    //     }).catch((error) => {
    //     console.log('Error getting location', error);
    //     });
    // }
}