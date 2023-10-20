import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm!: FormGroup;
  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private authService: AuthenticationService,
    private router: Router, // Inject the Router
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    if (this.ionicForm.valid) {
      this.authService
        .loginUser(this.ionicForm.value.email, this.ionicForm.value.password)
        .then((userCredential) => {
          const user = userCredential.user; // Obtenir l'objet utilisateur
          loading.dismiss();

          if (user && user.email) {
            // Stockez l'e-mail dans le local storage
            localStorage.setItem('userEmail', user.email);

            this.router.navigate(['/home']);
            console.log('Email: ', user.email);
            console.log('User ID: ', user.uid);
          } else {
            console.log('Utilisateur non trouvé.');
          }
        })
        .catch((err) => {
          this.presentToast(err.message);
          console.log(err);
          loading.dismiss();
        });
    } else {
      return console.log('Please provide all the required values!');
    }
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
}
