import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemandeService } from 'src/app/services/demande.service';
import { Demande } from '../demande';

@Component({
  selector: 'app-demande-details',
  templateUrl: './demande-details.component.html',
  styleUrls: ['./demande-details.component.scss']
})
export class DemandeDetailsComponent implements OnInit {

  'numDemande': number;
  demande!: Demande;
  constructor(private route: ActivatedRoute, private demandeService: DemandeService) { }

  ngOnInit(): void {
    this.numDemande = this.route.snapshot.params['numDemande'];
    this.demande = new Demande();
    this.demandeService.getDemandeById(this.numDemande).subscribe( data => {
      this.demande = data;
      console.log(data);
    });
  }


}
