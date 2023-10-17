import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service'; 
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  immobs!: Observable<any[]>;
  allImmobs: any[] = [];
  idDocument: any; // Define the idDocument property
  checkedValue:any
  constructor(
    private dataService: DataServiceService,
    private authService: AuthenticationService,
    private router: Router,
    private alertController: AlertController,
  ) {}

  getImmobs() {
    this.allImmobs = [];
    this.dataService.getAllImmobs().subscribe({
      next: (response) => {
        for (const key in response) {
          this.allImmobs.push({ id: key, ...response[key] });
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit() {
    this.getImmobs();
  }

  async signOut() {
    try {
      await this.authService.signOut();
      console.log('User signed out successfully.');
      this.router.navigate(['/landing']);
    } catch (error) {
      console.error('Error in signing out:', error);
    }
  }

  async presentAlert(idDocument: string) {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Etes vous sur de vouloir supprimer ce task ?',
      buttons: [
        'No',
        {
          text: 'Yes',
          handler: () => {
            this.dataService.deleteImmob(idDocument).subscribe({
              next: (response) => {
                this.getImmobs();
              },
              error: (err) => {
                console.log(err);
              },
            });
          },
        },
      ],
    });

    await alert.present();
  }

 
}
