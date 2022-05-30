import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Client } from '../model/client';


import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { countries } from '../model/countries-data-store';
import { ClientService } from '../services/client.service';
import { data } from 'jquery';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-compte-client',
  templateUrl: './compte-client.component.html',
  styleUrls: ['./compte-client.component.css'],

})
export class CompteClientComponent implements OnInit {
  validateForm!: FormGroup;
  date = null;
  client: Client;
  public countries: any = countries;
  selectedValue = null;



  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }


  }




  constructor(private fb: FormBuilder ,private httpClient : HttpClient,private clientService : ClientService) {
    this.client = new Client();

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      nom: [null, [Validators.required]],
      prenom: [null, [Validators.required]],
      nomPere: [null, [Validators.required]],
      nomMere: [null, [Validators.required]],
      phoneNumberPrefix: ['+216'],
      phoneNumber: [null, [Validators.required]],

    });
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  onSaveClient(): void {
    this.clientService.addClient(this.client).subscribe(response => console.log(response));

    }

    

}




