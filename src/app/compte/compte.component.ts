import { Component, OnInit } from '@angular/core';
import { Compte } from '../model/compte';
import { CompteService } from '../services/compte.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  //compte: Compte;
  loading = false
  dataDisplay: any;
  listComptes: Compte[] = [];
  count: number = 0;
  constructor(private route: ActivatedRoute, private compteService: CompteService) {
    //this.compte = new Compte();
    this.loading = false;


  }

  ngOnInit(): void {
    this.compteService.listCompte().subscribe(data => {
      console.log(data)
      if (data) {
        this.listComptes = data;
        this.count = this.listComptes.length
        if (this.count < 0) {
          this.loading = false;
        } else {
          this.loading = true
        }
      }


    });

  }
  numberWithSpaces(x : number) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

}
