import { Component, OnInit , Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Rdv } from '../../model/rdv';
import { Objet } from '../../model/objet';
import { RdvService } from '../../services/rdv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getISOWeek } from 'date-fns';

import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';




@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css'],

})

export class RdvComponent implements OnInit {
    inputValue?: string;
    date = null;
    rangeDate = null;

    rdv : Rdv;
  constructor(private rdvService : RdvService,route: ActivatedRoute, private router: Router ,private modalService: NgbModal,
    private i18n: NzI18nService) {
    this.rdv = new Rdv(arguments);
   }

  ngOnInit(): void {
      
  }

  minDate = new Date();
  maxDate = new Date(2050,11,31);
  dateFilter = date => {
    const day = date.getDay();
    return day != 0 && day != 6;
  }

  

  onSubmit(rdvForm : NgForm): void{
 
    this.rdvService.save(this.rdv).subscribe(result => this.gotoRdvList());

  }

  //openModal(){
  //  document.getElementById("exampleModal").click();
  //}
  
  openLg(content : any) {
    this.modalService.open(content, { size: 'lg' });
  }
 

  gotoRdvList() {
    this.router.navigate(['/rdvList']);
  }

  dateChanged($event : any) {
    console.log($event.target.value)
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  } 



}
