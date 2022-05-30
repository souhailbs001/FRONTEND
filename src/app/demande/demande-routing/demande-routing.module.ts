import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreatedemandeComponent } from "../createdemande/createdemande.component";
import { DemandeDetailsComponent } from "../demande-details/demande-details.component";
import { DemandeComponent } from "../demande.component";
import { ListdemandeComponent } from "../listdemande/listdemande.component";
import { UpdateDemandeComponent } from "../update-demande/update-demande.component";



const routes: Routes = [
    //{ path: 'demandelist', component: DemandeComponent},
    { path: '',pathMatch: 'full', component: DemandeComponent, data: { title: 'demande'}},
    { path: 'createdemande', component: CreatedemandeComponent},
    { path: 'demandelist', component: ListdemandeComponent},
    { path: 'update-demande/:NumDemande', component: UpdateDemandeComponent},
    { path: 'demande-details/:NumDemande', component: DemandeDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemandeRoutingModule {}