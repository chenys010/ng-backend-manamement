import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EffectsModule } from "@ngrx/effects";
// import {} from "@ngrx/entity";
import { StoreModule } from "@ngrx/store";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgZorroAntdModule, NZ_MESSAGE_CONFIG } from "ng-zorro-antd";

import { UserRoutingModule } from "./user-routing.module";
import { LoginComponent } from "./cpt/login/login.component";
import { reducers } from "./store/reducers";
import { UserEffects } from "./store/effects/user.effects";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    StoreModule.forFeature("user", reducers),
    EffectsModule.forFeature([UserEffects]),
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_MESSAGE_CONFIG, useValue: { nzDuration: 3000 } }]
})
export class UserModule {}
