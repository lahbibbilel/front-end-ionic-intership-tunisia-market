import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { ConsummerService } from 'src/app/service-nodeJs/consummer.service';

@Component({
  selector: 'app-add-anonce',
  templateUrl: './add-anonce.page.html',
  styleUrls: ['./add-anonce.page.scss'],
})
export class AddAnoncePage implements OnInit {
  groupeAnonces!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private consumer: ConsummerService,
    private toastr: ToastrService,
    private alertController: AlertController
  ) {
    this.groupeAnonces = this.formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      user: [localStorage.getItem('userEmail'), Validators.required],
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
            this.addAnonce();
          },
        },
      ],
    });

    await alert.present();
  }

  ngOnInit() {}
  addAnonce() {
    if (this.groupeAnonces.valid) {
      const newAnonce = this.groupeAnonces.value;
      this.consumer.createAnonce(newAnonce).subscribe(
        (response) => {
          //this.toastr.success('Annonce ajoutée avec succès', 'Success');
          alert('Annonce add with success');
        },
        (error) => {
          this.toastr.error(
            "Une erreur s'est produite lors de l'ajout de l'annonce",
            'Erreur'
          ); // Message d'erreur
          console.log('error');
        }
      );
    }
  }
}
