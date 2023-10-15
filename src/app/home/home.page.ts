import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { DataServiceService, Immob } from '../data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  @ViewChild(IonModal) modal!: IonModal;
  immobSub!: Subscription;
  model: any = {};
  immobs: Immob[] = [];
  isOpen: boolean = false;

  constructor(private immob: DataServiceService) {}

  ngOnInit(): void {
    this.immob.getAllImmobs(); // Il faut appeler la méthode correcte pour récupérer les immobs
    this.immobSub = this.immob.immobs.subscribe({
      next: (immobs) => {
        this.immobs = immobs;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    this.model = {};
    this.isOpen = false;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  async save(form: NgForm) {
    try {
      if (!form.valid) {
        // Affichez une alerte ou un message d'erreur si le formulaire n'est pas valide
        return;
      }
      console.log(form.value);
      if (this.model?.id) {
        await this.immob.updateImmob(this.model, this.model.id); // Vous devriez passer `this.model` et l'ID
      } else {
        await this.immob.addImmob(form.value);
      }
      this.modal.dismiss();
    } catch (e) {
      console.log(e);
    }
  }

  async deleteImmob(immob: Immob) {
    try {
      await this.immob.deleteImmob(immob.id!);
    } catch (e) {
      console.log(e);
    }
  }

  async editImmob(immob: Immob) {
    try {
      this.isOpen = true;
      this.model = { ...immob };
    } catch (e) {
      console.log(e);
    }
  }

  ngOnDestroy(): void {
    if (this.immobSub) {
      this.immobSub.unsubscribe();
    }
  }

}
