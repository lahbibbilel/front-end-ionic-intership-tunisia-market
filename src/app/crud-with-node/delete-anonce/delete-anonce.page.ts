import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsummerService } from 'src/app/service-nodeJs/consummer.service';

@Component({
  selector: 'app-delete-anonce',
  templateUrl: './delete-anonce.page.html',
  styleUrls: ['./delete-anonce.page.scss'],
})
export class DeleteAnoncePage implements OnInit {
  annonceId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ConsummerService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.annonceId = params.get('id');
    });
  }

  deleteAnnonce() {
    if (this.annonceId) {
      this.service.deleteAnonce(this.annonceId).subscribe(
        (response) => {
          console.log('Annonce supprimée avec succès');
          // Redirigez l'utilisateur vers la page d'accueil ou une autre page de votre choix
          this.router.navigate(['/home']);
        },
        (error) => {
          console.log("Erreur lors de la suppression de l'annonce");
          // Gérez l'erreur, par exemple, affichez un message à l'utilisateur
        }
      );
    }
  }
}
