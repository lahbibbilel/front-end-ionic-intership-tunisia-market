import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service'; // Update this path
import { Router, RouterLink } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  immobs!: Observable<any[]>;
  ImmobData = {
    Name: '',
    description: '',
    image: '',
    localisation: '',
    nb_pieces: '',
    price: ''
  };
  allImmobs:any[] = [];

  constructor(    private dataService:DataServiceService,
    private authService : AuthenticationService,
    private router: Router
    ) {


  }

  getImmobs() {
    this.allImmobs = [];
    this.dataService.getAllImmobs().subscribe({
      next: (response) => {
        console.log(response);
        for (const key in response) {
          this.allImmobs.push({ id: key, ...response[key] });
        }
        console.log(this.allImmobs);
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
}