import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  NgZorroAntdModule,
  NZ_I18N,
  zh_CN,
  NZ_MESSAGE_CONFIG
} from "ng-zorro-antd";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducers } from "./reducers";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";

import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// 配置angular的i18n
import { registerLocaleData } from "@angular/common";
import zh from "@angular/common/locales/zh";
registerLocaleData(zh);

import { HeaderComponent } from "./layout/cpt/header/header.component";
import { SideComponent } from "./layout/cpt/side/side.component";
import { BodyComponent } from "./layout/cpt/body/body.component";
import { MainComponent } from "./layout/cpt/main/main.component";

import { LayoutModule } from "./layout/layout.module";
import { UserModule } from "./user/user.module";

// Service
import { UserService } from "./api/user.service";
import { AppHttpInterceptorService } from "./api/app-http-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideComponent,
    BodyComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // 导入ng-zorro-antd模块
    NgZorroAntdModule,
    LayoutModule,
    UserModule,
    StoreModule.forRoot(reducers, {}),
    StoreModule.forRoot({
      router: routerReducer
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: "NgRx OTC Store App",
      logOnly: environment.production
    })
  ],
  providers: [
    // 配置ng-zorro-antd国际化
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: "UserService", useClass: UserService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService,
      multi: true
    },
    { provide: NZ_MESSAGE_CONFIG, useValue: { nzDuration: 3000 } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
