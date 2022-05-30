import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService } from 'src/app/services/demande.service';
import { Demande } from '../demande';

@Component({
  selector: 'app-listdemande',
  templateUrl: './listdemande.component.html',
  styleUrls: ['./listdemande.component.scss']
})
export class ListdemandeComponent implements OnInit {

  demandes: Demande[];
  
  constructor(private demandeService: DemandeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDemandes();
  }

  private getDemandes(){
    this.demandeService.getDemandesList().subscribe(data => {
      this.demandes = data;
    });
  }

  updateDemande(numDemande: number){
    this.router.navigate(['update-demande', numDemande]);
  }

  deleteDemande(numDemande: number){
    this.demandeService.deleteDemande(numDemande)
    .subscribe( data =>{
      console.log(data);
      this.getDemandes();
    })
  }

  demandeDetails(numDemande: number){
    this.router.navigate(['demande-details', numDemande]);
  }
}
