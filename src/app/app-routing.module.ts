import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RdvComponent } from './pages/rdv/rdv.component';
import { RdvListComponent } from './pages/rdv-list/rdv-list.component';
import { ModalEditRdvComponent } from './modals/modal-edit-rdv/modal-edit-rdv.component';
import { ModalAcceptRdvComponent } from './modals/modal-accept-rdv/modal-accept-rdv.component';
import { CreditListComponent } from './credit-list/credit-list.component';
import { ClientComponent } from './client/client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { CompteClientComponent } from './compte-client/compte-client.component';
import { DeviseListComponent } from './devise-list/devise-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CreatedemandeComponent } from './demande/createdemande/createdemande.component';
import { ListdemandeComponent } from './demande/listdemande/listdemande.component';
import { UpdateDemandeComponent } from './demande/update-demande/update-demande.component';
import { DemandeDetailsComponent } from './demande/demande-details/demande-details.component';
import { DemandeComponent } from './demande/demande.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';





const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'compte', component : CompteComponent},
  { path: 'welcome', component : WelcomeComponent},
  { path: 'rdv',component : RdvComponent },
  { path: 'ListRdv',component : RdvListComponent },
  { path: 'ModalAcceptRdv',component : ModalAcceptRdvComponent },
  { path: 'ModalEditRdv',component : ModalEditRdvComponent },
  { path: 'creditList',component : CreditListComponent },
  { path: 'compteClient', component : ClientComponent},
  { path: 'clientList', component : ClientListComponent},
  { path: 'addCompteClient', component : CompteClientComponent},
  { path: 'deviseList', component : DeviseListComponent},
  { path: 'login', component : LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'profil', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createdemande', component: CreatedemandeComponent},
  { path: 'demandelist', component: ListdemandeComponent},
  { path: 'update-demande/:numDemande', component: UpdateDemandeComponent},
  { path: 'demande-details/:numDemande', component: DemandeDetailsComponent},
  { path: 'demandes', component: DemandeComponent },
  { path: 'AdminBoard', component: AdminBoardComponent}











  //{ path: '', pathMatch: 'full', redirectTo: '/welcome' },
  //{ path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
