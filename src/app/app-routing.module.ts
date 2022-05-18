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






const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/compte' },
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














  //{ path: '', pathMatch: 'full', redirectTo: '/welcome' },
  //{ path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
