import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeService } from 'src/app/services/demande.service';
//import { DemandeService } from '../../services/demande.service';
//import { DemandeService } from 'src/app/services/demande.service';
import { Demande } from '../demande';

@Component({
  selector: 'app-createdemande',
  templateUrl: './createdemande.component.html',
  styleUrls: ['./createdemande.component.scss']
})
export class CreatedemandeComponent implements OnInit {

  demande: Demande = new Demande();
  //submitted = false;

  constructor(private demandeService: DemandeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  AddDemande(){
    this.demandeService.createDemande(this.demande).subscribe(data=>this.router.navigate(['/demandelist']));
  }

  /*newDemande(): void {
    this.submitted = false;
    this.demande = new Demande();
  }

  saveDemande() {
    this.demandeService.createDemande(this.demande).subscribe(data => {
      console.log(data)
      this.demande = new Demande();
      this.gotodemandeList();
    },
    error => console.log(error));
  }*/
  /*onSubmit(form: NgForm) {
    
    this.submitted = true;
    const numDemande = form.value.numDemande;
    const besoin = form.value.besoin;
    const montant = form.value.montant;
    const duree = form.value.duree;
    const annuiteMaximale = form.value.annuiteMaximale;
    this.demandeService.createDemande(this.demande).subscribe(data => {
      console.log(data);
    })
  }

  gotodemandeList() {

    this.router.navigate(['/demandelist']);
  }*/
}
