import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService } from 'src/app/services/demande.service';
import { Demande } from '../demande';

@Component({
  selector: 'app-update-demande',
  templateUrl: './update-demande.component.html',
  styleUrls: ['./update-demande.component.scss']
})
export class UpdateDemandeComponent implements OnInit {

  'numDemande': number;
  demande: Demande = new Demande();
  constructor(private demandeService: DemandeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.numDemande = this.route.snapshot.params['numDemande'];

    this.demandeService.getDemandeById(this.numDemande).subscribe(data => {
      this.demande = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.demandeService.updateDemande(this.numDemande, this.demande).subscribe( data =>{
      this.goToDemandeList();
    }
    , error => console.log(error));
  }

  goToDemandeList(){
    this.router.navigate(['/demandelist']);
  }

}

