import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ConsummerService } from 'src/app/service-nodeJs/consummer.service';

@Component({
  selector: 'app-update-anonce',
  templateUrl: './update-anonce.page.html',
  styleUrls: ['./update-anonce.page.scss'],
})
export class UpdateAnoncePage implements OnInit {
  _id: any;
  anonceData: any;
  newForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private consummer: ConsummerService,
    private formbuilder: FormBuilder,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this._id = params['id'];
      this.getAnonce();
      this.newForm = this.formbuilder.group({
        name: [''],
        image: [''],
        description: [''],
      });
    });
  }
  getAnonce() {
    this.consummer.getAnonceById(this._id).subscribe((data) => {
      this.anonceData = data;
      this.newForm.setValue({
        name: this.anonceData.name,
        image: this.anonceData.image,
        description: this.anonceData.description,
      });
    });
  }

  async showConfirmationAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'sure ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Enregistrer',
          handler: () => {
            this.updateAnonce();
          },
        },
      ],
    });

    await alert.present();
  }

  updateAnonce() {
    const updateAnoce = this.newForm.value;
    this.consummer.updateAnonce(updateAnoce, this._id).subscribe(
      (response) => {
        console.log('ok');
      },
      (error) => {
        console.log('failed to update');
      }
    );
  }
}
