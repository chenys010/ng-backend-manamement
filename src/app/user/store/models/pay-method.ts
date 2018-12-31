/*
 * @Author: chenys
 * @Date: 2018-12-21 11:05:53
 * @Last Modified by: chenys
 * @Last Modified time: 2018-12-22 16:16:26
 */

export type IGetPayMethodListRequest = undefined;
export interface IPayType {
  payCode: number;
  payName: string;
}
export interface IGetPayMethodListResponseData {
  id: number;
  userId: number;
  account: string;
  createDate: string;
  payCode: number;
  accountName: string;
  openBank: string;
  openSubbranch: string;
  payType: IPayType;
}
export interface IGetPayMethodListResponse {
  code: number;
  data: Array<IGetPayMethodListResponseData>;
  msg: string;
}

export type IGetPayTypeListRequest = undefined;
export interface IGetPayTypeListResponse {
  code: number;
  msg: string;
  data: Array<IPayType>;
}

export interface IAddPayMethodRequest {
  account: string;
  accountName: string;
  openBank: string;
  openSubbranch: string;
  payCode: number;
  url: string;
  dayLimit: number;
  dayTimes: number;
}
export interface IAddPayMethodResponse {
  code: number;
  msg: string;
  data: any;
}

export interface IUpdatePayMethodRequest {
  id: number;
  account: string;
  payCode: number;
  accountName: string;
  openBank: string;
  openSubbranch: string;
  dayLimit: number;
  dayTimes: number;
}
export interface IUpdatePayMethodResponse {
  code: number;
  msg: string;
  data: any;
}

export interface IDeletePayMethodRequest {
  id: string;
}
export interface IDeletePayMethodResponse {
  code: number;
  msg: string;
  data: any;
}

export interface IGetPayMethodByIdRequest {
  id: number;
}
export interface IGetPayMethodByIdResponseData {
  id?: number;
  userId?: number;
  account?: string;
  deleteStatus?: number;
  payCode?: number;
  accountName?: string;
  openBank?: string;
  openSubbranch?: string;
}
export interface IGetPayMethodByIdResponse {
  code: number;
  msg: string;
  data: IGetPayMethodByIdResponseData;
}

export interface ISortPayMethodRequest {
  sortPayMethod: Array<number>;
}
export interface ISortPayMethodResponse {
  code: number;
  msg: string;
  data: any;
}
