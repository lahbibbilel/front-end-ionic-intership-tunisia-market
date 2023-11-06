import { Component } from '@angular/core';
import { ConsummerService } from '../service-nodeJs/consummer.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

interface anonces {
  _id: any;
  name: string;
  image: string;
  description: string;
  user: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  anonce: anonces[] = [];
  userEmail: string | null = null;
  userName: string | null = null;

  constructor(
    private service: ConsummerService,
    private authService: AuthenticationService,
    private router: Router,
    private menu: MenuController
  ) {}

  ngOnInit(): void {
    this.service.getAnonces().subscribe((data: anonces[]) => {
      try {
        this.anonce = data;
        this.userEmail = localStorage.getItem('userEmail');
        
        console.log(this.anonce);
      } catch (e) {
        console.log(e);
      }
    });
  }

  updateAnnonce(_id: string) {
    this.router.navigate(['/update-anonce', _id]);
  }

  // Navigate to the delete page with the announcement ID as a route parameter
  deleteAnnonce(_id: string) {
    this.router.navigate(['/delete-anonce', _id]);
  }

  closeMenuAndDoSomething(item: string) {
    // You can perform actions here when a menu item is clicked
    console.log(`Clicked on ${item}`);
    this.menu.close(); // Close the menu
  }
}
