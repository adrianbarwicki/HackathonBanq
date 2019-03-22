import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public base64Image: string;

  constructor(public navCtrl: NavController, private camera: Camera) {

  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // this.base64Image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      alert(this.base64Image)
     }).catch((err) => {
       alert("error " + JSON.stringify(err))
      // Handle error
     });
  }

}
