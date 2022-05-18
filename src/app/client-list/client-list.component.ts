import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { Currency } from '../model/currency';
import { ClientService } from '../services/client.service';
declare var $: any;

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  dynamicdata: any;
  listClients: Client[] = [];



  constructor(private clientService: ClientService , http : HttpClient) {
    this.clientService.listClient().subscribe(data => {
      this.listClients = data;
      setTimeout(()=>{   
        $('#dataTables-example').DataTable( {
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu : [5, 10, 25]
        });

    }
    )});
  }

    ngOnInit() : void {
      
      //datepicker
      $('.dateadded').on( 'change', function (ret :any) {
 
        var v = ret.target.value  // getting search input value
        
        $('#dataTables-example').DataTable().columns(3).search(v).draw();
    } );
    }

}

