import { Action } from "@ngrx/store";
import { ILoginRequest, ILoginResponse } from "../models/user";
import {
  IGetPayMethodListRequest,
  IGetPayMethodListResponse,
  IGetPayTypeListRequest,
  IGetPayTypeListResponse,
  IAddPayMethodRequest,
  IAddPayMethodResponse,
  IGetPayMethodByIdRequest,
  IGetPayMethodByIdResponse,
  IUpdatePayMethodRequest,
  IUpdatePayMethodResponse,
  IDeletePayMethodRequest,
  IDeletePayMethodResponse,
  ISortPayMethodRequest,
  ISortPayMethodResponse
} from "../models/pay-method";

export enum UserActionTypes {
  Login = "[User] Login",
  LoginSuccess = "[User] Login Success",
  LoginError = "[User] Login Error",

  // 支付方式
  GetPayMethodList = "[User] Get Pay Method List",
  GetPayMethodListSuccess = "[User] Get Pay Method List Success",
  GetPayMethodListError = "[User] Get Pay Method List Error",

  GetPayTypeList = "[User] Get Pay Type List",
  GetPayTypeListSuccess = "[User] Get Pay Type List Success",
  GetPayTypeListError = "[User] Get Pay Type List Error",

  AddPayMethod = "[User] Add Pay Method",
  AddPayMethodSuccess = "[User] Add Pay Method Success",
  AddPayMethodError = "[User] Add Pay Method Error",

  UpdatePayMethod = "[User] Update Pay Method",
  UpdatePayMethodSuccess = "[User] Update Pay Method Success",
  UpdatePayMethodError = "[User] Update Pay Method Error",

  DeletePayMethod = "[User] Delete Pay Method",
  DeletePayMethodSuccess = "[User] Delete Pay Method Success",
  DeletePayMethodError = "[User] Delete Pay Method Error",

  GetPayMethodById = "[User] Get Pay Method By Id",
  GetPayMethodByIdSuccess = "[User] Get Pay Method By Id Success",
  GetPayMethodByIdError = "[User] Get Pay Method By Id Error",

  SortPayMethod = "[User] Sort Pay Method",
  SortPayMethodSuccess = "[User] Sort Pay Method Success",
  SortPayMethodError = "[User] Sort Pay Method Error"
}

export class Login implements Action {
  readonly type = UserActionTypes.Login;
  constructor(public payload: { req: ILoginRequest; cpt: any }) {}
}

export class LoginSuccess implements Action {
  readonly type = UserActionTypes.LoginSuccess;
  constructor(public payload: { res: ILoginResponse; cpt: any }) {}
}

export class LoginError implements Action {
  readonly type = UserActionTypes.LoginError;
  constructor(public payload: { error: any }) {}
}

// 支付方式 BEGIN
export class GetPayMethodList implements Action {
  readonly type = UserActionTypes.GetPayMethodList;
  constructor(public payload: { req: IGetPayMethodListRequest; cpt: any }) {}
}
export class GetPayMethodListSuccess implements Action {
  readonly type = UserActionTypes.GetPayMethodListSuccess;
  constructor(public payload: { res: IGetPayMethodListResponse; cpt: any }) {}
}
export class GetPayMethodListError implements Action {
  readonly type = UserActionTypes.GetPayMethodListError;
  constructor(public payload: { error: any }) {}
}

export class GetPayTypeList implements Action {
  readonly type = UserActionTypes.GetPayTypeList;
  constructor(public payload: { req: IGetPayTypeListRequest; cpt: any }) {}
}
export class GetPayTypeListSuccess implements Action {
  readonly type = UserActionTypes.GetPayTypeListSuccess;
  constructor(public payload: { res: IGetPayTypeListResponse; cpt: any }) {}
}
export class GetPayTypeListError implements Action {
  readonly type = UserActionTypes.GetPayTypeListError;
  constructor(public payload: { error: any }) {}
}

export class AddPayMethod implements Action {
  readonly type = UserActionTypes.AddPayMethod;
  constructor(public payload: { req: IAddPayMethodRequest; cpt: any }) {}
}
export class AddPayMethodSuccess implements Action {
  readonly type = UserActionTypes.AddPayMethodSuccess;
  constructor(public payload: { res: IAddPayMethodResponse; cpt: any }) {}
}
export class AddPayMethodError implements Action {
  readonly type = UserActionTypes.AddPayMethodError;
  constructor(public payload: { error: any }) {}
}

export class UpdatePayMethod implements Action {
  readonly type = UserActionTypes.UpdatePayMethod;
  constructor(public payload: { req: IUpdatePayMethodRequest; cpt: any }) {}
}
export class UpdatePayMethodSuccess implements Action {
  readonly type = UserActionTypes.UpdatePayMethodSuccess;
  constructor(public payload: { res: IUpdatePayMethodResponse; cpt: any }) {}
}
export class UpdatePayMethodError implements Action {
  readonly type = UserActionTypes.UpdatePayMethodError;
  constructor(public payload: { error: any }) {}
}

export class DeletePayMethod implements Action {
  readonly type = UserActionTypes.DeletePayMethod;
  constructor(public payload: { req: IDeletePayMethodRequest; cpt: any }) {}
}
export class DeletePayMethodSuccess implements Action {
  readonly type = UserActionTypes.DeletePayMethodSuccess;
  constructor(public payload: { res: IDeletePayMethodResponse; cpt: any }) {}
}
export class DeletePayMethodError implements Action {
  readonly type = UserActionTypes.DeletePayMethodError;
  constructor(public payload: { error: any }) {}
}

export class GetPayMethodById implements Action {
  readonly type = UserActionTypes.GetPayMethodById;
  constructor(public payload: { req: IGetPayMethodByIdRequest; cpt: any }) {}
}
export class GetPayMethodByIdSuccess implements Action {
  readonly type = UserActionTypes.GetPayMethodByIdSuccess;
  constructor(public payload: { res: IGetPayMethodByIdResponse; cpt: any }) {}
}
export class GetPayMethodByIdError implements Action {
  readonly type = UserActionTypes.GetPayMethodByIdError;
  constructor(public payload: { error: any }) {}
}

export class SortPayMethod implements Action {
  readonly type = UserActionTypes.SortPayMethod;
  constructor(public payload: { req: ISortPayMethodRequest; cpt: any }) {}
}
export class SortPayMethodSuccess implements Action {
  readonly type = UserActionTypes.SortPayMethodSuccess;
  constructor(public payload: { res: ISortPayMethodResponse; cpt: any }) {}
}
export class SortPayMethodError implements Action {
  readonly type = UserActionTypes.SortPayMethodError;
  constructor(public payload: { error: any }) {}
}

// 支付方式 END

export type UserActionsUnion =
  | Login
  | LoginSuccess
  | LoginError
  | GetPayMethodList
  | GetPayMethodListSuccess
  | GetPayMethodListError
  | GetPayTypeList
  | GetPayTypeListSuccess
  | GetPayTypeListError
  | AddPayMethod
  | AddPayMethodSuccess
  | AddPayMethodError
  | UpdatePayMethod
  | UpdatePayMethodSuccess
  | UpdatePayMethodError
  | DeletePayMethod
  | DeletePayMethodSuccess
  | DeletePayMethodError
  | GetPayMethodById
  | GetPayMethodByIdSuccess
  | GetPayMethodByIdError
  | SortPayMethod
  | SortPayMethodSuccess
  | SortPayMethodError;
