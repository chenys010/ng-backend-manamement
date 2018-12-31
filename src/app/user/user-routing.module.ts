import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./cpt/login/login.component";

const routes: Routes = [
  {
    path: "u/login",
    component: LoginComponent,
    data: { title: "c" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
