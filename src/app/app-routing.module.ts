import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOperatorComponent } from './component/list-operator/list-operator.component';
import { AddOperatorComponent } from './component/add-operator/add-operator.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: 'list-operator', component: ListOperatorComponent },
  { path: 'add-operator', component: AddOperatorComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
