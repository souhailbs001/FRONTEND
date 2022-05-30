import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CreatedemandeComponent } from "./createdemande/createdemande.component";
import { DemandeComponent } from "./demande.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemandeRoutingModule } from "./demande-routing/demande-routing.module";
import { ListdemandeComponent } from './listdemande/listdemande.component';
import { UpdateDemandeComponent } from './update-demande/update-demande.component';
import { DemandeDetailsComponent } from './demande-details/demande-details.component';



@NgModule({
    declarations: [
        DemandeComponent,
        CreatedemandeComponent,
        ListdemandeComponent,
        UpdateDemandeComponent,
        DemandeDetailsComponent
    ],

    imports: [
        BrowserModule,
        DemandeRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        
    ],
    providers: [/*{provide  : HTTP_INTERCEPTORS ,useClass :GeneralInterceptor , multi: true}*/],
    bootstrap: [DemandeComponent]
})

export class DemandeModule {

} 