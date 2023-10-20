import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-add-immob',
  templateUrl: './add-immob.page.html',
  styleUrls: ['./add-immob.page.scss'],
})
export class AddImmobPage {
  ImmobData = {
    Name: '',
    description: '',
    image: '',
    localisation: '',
    nb_pieces: '',
    price: '',
  };
  allImmobs: any[] = [];
  showAddButton = true;

  constructor(private dataService: DataServiceService) {}

  toggleBtn() {
    this.showAddButton = !this.showAddButton;
  }

  addNewImmob() {
    const newImmob = {
      Name: this.ImmobData.Name,
      description: this.ImmobData.description,
      image: this.ImmobData.image,
      localisation: this.ImmobData.localisation,
      nb_pieces: this.ImmobData.nb_pieces,
      price: this.ImmobData.price,
      userId: localStorage.getItem('userId'),
    };
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
}
