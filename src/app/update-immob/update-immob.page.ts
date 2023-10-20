import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-immob',
  templateUrl: './update-immob.page.html',
  styleUrls: ['./update-immob.page.scss'],
})
export class UpdateImmobPage {
  ImmobData = {
    Name: '',
    description: '',
    image: '',
    localisation: '',
    nb_pieces: '',
    price: '',
  };
  immobs!: Observable<any[]>;
  allImmobs: any[] = [];

  constructor(
    private dataService: DataServiceService,
    private authService: AuthenticationService
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

  ngOnInit() {}
  changeCheckedValue(checkedValue: any, idDocument: any) {
    checkedValue = !checkedValue;
  }
}
