import { Injectable, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, tap } from "rxjs/operators";
import { ILoginRequest, ILoginResponse } from "../models/user";
import { LoginComponent } from "../../cpt/login/login.component";

import { Store, select } from "@ngrx/store";
import * as fromUser from "../reducers/index";
import { map, filter } from "rxjs/operators";
import { Subscription } from "rxjs";
import { UserActions } from "../actions";
import { combineAll, debounceTime } from "rxjs/operators";

import { NzMessageService } from "ng-zorro-antd";

import {
  IGetPayMethodListResponse,
  IGetPayTypeListResponse,
  IAddPayMethodResponse,
  IUpdatePayMethodResponse,
  IDeletePayMethodResponse,
  IGetPayMethodByIdResponse,
  ISortPayMethodResponse
} from "../models/pay-method";
import { UpdatePayMethod } from "../actions/user.actions";
import { pipe } from "@angular/core/src/render3";
import { ThrowStmt } from "@angular/compiler";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    @Inject("UserService") private userService,
    private nzMessageService: NzMessageService,
    private router: Router,
    private store: Store<fromUser.State>
  ) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType<UserActions.Login>(UserActions.UserActionTypes.Login),
    map(action => action.payload),
    exhaustMap(payload => {
      return this.userService.login(payload.req).pipe(
        map(
          (res: ILoginResponse) =>
            new UserActions.LoginSuccess({ res, cpt: payload.cpt })
        ),
        catchError(error => of(new UserActions.LoginError({ error })))
      );
    })
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.LoginSuccess),
    tap((response: any) => {
      const { payload } = response;
      if (200 === payload.res.code) {
        this.router.navigate(["home"]);
      } else {
        this.nzMessageService.create(
          "error",
          payload.res.msg || "Login Error!"
        );
        payload.cpt.validateForm.reset();
      }
    })
  );

  @Effect({ dispatch: false })
  loginError$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.LoginError),
    tap(() => {
      this.nzMessageService.create("error", "Login Error!");
    })
  );

  // Pay Method BEGIN
  @Effect()
  getPayMethodList$ = this.actions$.pipe(
    ofType<UserActions.GetPayMethodList>(
      UserActions.UserActionTypes.GetPayMethodList
    ),
    map(action => action.payload),
    exhaustMap(payload => {
      return this.userService.getPayMethodList(payload.req).pipe(
        map(
          (res: IGetPayMethodListResponse) =>
            new UserActions.GetPayMethodListSuccess({ res, cpt: payload.cpt })
        ),
        catchError(error =>
          of(new UserActions.GetPayMethodListError({ error }))
        )
      );
    })
  );
  @Effect({ dispatch: false })
  getPayMethodListSuccess$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.GetPayMethodListSuccess),
    tap((response: any) => {
      const { payload } = response;
      if (200 === payload.res.code) {
      } else {
        this.nzMessageService.create(
          "error",
          payload.res.msg || "Login Error!"
        );
      }
    })
  );
  @Effect({ dispatch: false })
  getPayMethodListError$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.GetPayMethodListError),
    tap(() => {
      // do something
      this.nzMessageService.create("error", "getPayMethodListError");
    })
  );

  @Effect()
  getPayTypeList$ = this.actions$.pipe(
    ofType<UserActions.GetPayTypeList>(
      UserActions.UserActionTypes.GetPayTypeList
    ),
    map(action => action.payload),
    exhaustMap(payload => {
      return this.userService.getPayTypeList(payload.req).pipe(
        map(
          (res: IGetPayTypeListResponse) =>
            new UserActions.GetPayTypeListSuccess({ res, cpt: payload.cpt })
        ),
        catchError(error => of(new UserActions.GetPayTypeListError({ error })))
      );
    })
  );
  @Effect({ dispatch: false })
  getPayTypeListSuccess$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.GetPayTypeListSuccess),
    tap((response: any) => {
      const { payload } = response;
      if (200 === payload.res.code) {
      } else {
        this.nzMessageService.create(
          "error",
          payload.res.msg || "Login Error!"
        );
      }
    })
  );
  @Effect({ dispatch: false })
  getPayTypeListError$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.GetPayTypeListError),
    tap(() => {
      // do something
      this.nzMessageService.create("error", "getPayTypeListError");
    })
  );

  @Effect()
  addPayMethod$ = this.actions$.pipe(
    ofType<UserActions.AddPayMethod>(UserActions.UserActionTypes.AddPayMethod),
    map(action => action.payload),
    exhaustMap(payload => {
      return this.userService.addPayMethod(payload.req).pipe(
        map(
          (res: IAddPayMethodResponse) =>
            new UserActions.AddPayMethodSuccess({ res, cpt: payload.cpt })
        ),
        catchError(error => of(new UserActions.AddPayMethodError({ error })))
      );
    })
  );
  @Effect({ dispatch: false })
  addPayMethodSuccess$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.AddPayMethodSuccess),
    tap((response: any) => {
      const { payload } = response;
      if (200 === payload.res.code) {
      } else {
        this.nzMessageService.create(
          "error",
          payload.res.msg || "Login Error!"
        );
      }
    })
  );
  @Effect({ dispatch: false })
  addPayMethodError$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.AddPayMethodError),
    tap(() => {
      // do something
      this.nzMessageService.create("error", "addPayMethodError");
    })
  );

  @Effect()
  updatePayMethod$ = this.actions$.pipe(
    ofType<UserActions.UpdatePayMethod>(
      UserActions.UserActionTypes.UpdatePayMethod
    ),
    map(action => action.payload),
    exhaustMap(payload => {
      return this.userService.updatePayMethod(payload.req).pipe(
        map(
          (res: IUpdatePayMethodResponse) =>
            new UserActions.UpdatePayMethodSuccess({ res, cpt: payload.cpt })
        ),
        catchError(error => of(new UserActions.UpdatePayMethodError({ error })))
      );
    })
  );
  @Effect({ dispatch: false })
  updatePayMethodSuccess$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.UpdatePayMethodSuccess),
    tap((response: any) => {
      const { payload } = response;
      if (200 !== payload.res.code) {
        this.nzMessageService.create(
          "error",
          payload.res.msg || "Login Error!"
        );
      }
    })
  );
  @Effect({ dispatch: false })
  updatePayMethodError$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.UpdatePayMethodError),
    tap(() => {
      this.nzMessageService.create("error", "updatePayMethodError");
    })
  );

  @Effect()
  deletePayMethod$ = this.actions$.pipe(
    ofType<UserActions.DeletePayMethod>(
      UserActions.UserActionTypes.DeletePayMethod
    ),
    map(action => action.payload),
    exhaustMap(payload => {
      return this.userService.deletePayMethod(payload.req).pipe(
        map(
          (res: IDeletePayMethodResponse) =>
            new UserActions.DeletePayMethodSuccess({ res, cpt: payload.cpt })
        ),
        catchError(error => of(new UserActions.DeletePayMethodError({ error })))
      );
    })
  );
  @Effect({ dispatch: false })
  deletePayMethodSuccess$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.DeletePayMethodSuccess),
    tap((response: any) => {
      const { payload } = response;
      if (200 === payload.res.code) {
      } else {
        this.nzMessageService.create(
          "error",
          payload.res.msg || "Login Error!"
        );
      }
    })
  );
  @Effect({ dispatch: false })
  deletePayMethodError$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.DeletePayMethodError),
    tap(() => {
      // do something
      this.nzMessageService.create("error", "deletePayMethodError");
    })
  );

  @Effect()
  getPayMethodById$ = this.actions$.pipe(
    ofType<UserActions.GetPayMethodById>(
      UserActions.UserActionTypes.GetPayMethodById
    ),
    map(action => action.payload),
    exhaustMap(payload => {
      return this.userService.getPayMethodById(payload.req).pipe(
        map(
          (res: IGetPayMethodByIdResponse) =>
            new UserActions.GetPayMethodByIdSuccess({ res, cpt: payload.cpt })
        ),
        catchError(error =>
          of(new UserActions.GetPayMethodByIdError({ error }))
        )
      );
    })
  );
  @Effect({ dispatch: false })
  getPayMethodByIdSuccess$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.GetPayMethodByIdSuccess),
    tap((response: any) => {
      const { payload } = response;
      if (200 === payload.res.code) {
      } else {
        this.nzMessageService.create(
          "error",
          payload.res.msg || "Login Error!"
        );
      }
    })
  );
  @Effect({ dispatch: false })
  getPayMethodByIdError$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.GetPayMethodByIdError),
    tap(() => {
      // do something
      this.nzMessageService.create("error", "getPayMethodByIdError");
    })
  );

  @Effect()
  sortPayMethod$ = this.actions$.pipe(
    ofType<UserActions.SortPayMethod>(
      UserActions.UserActionTypes.SortPayMethod
    ),
    map(action => action.payload),
    exhaustMap(payload => {
      return this.userService.sortPayMethod(payload.req).pipe(
        map(
          (res: ISortPayMethodResponse) =>
            new UserActions.SortPayMethodSuccess({ res, cpt: payload.cpt })
        ),
        catchError(error => of(new UserActions.SortPayMethodError({ error })))
      );
    })
  );
  @Effect({ dispatch: false })
  sortPayMethodSuccess$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.SortPayMethodSuccess),
    tap((response: any) => {
      const { payload } = response;
      if (200 === payload.res.code) {
      } else {
        this.nzMessageService.create(
          "error",
          payload.res.msg || "Login Error!"
        );
      }
    })
  );
  @Effect({ dispatch: false })
  sortPayMethoError$ = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.SortPayMethodError),
    tap(() => {
      // do something
      this.nzMessageService.create("error", "sortPayMethoError");
    })
  );
  // Pay Method END
}
