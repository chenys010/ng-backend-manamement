export interface ILoginRequest {
  email: string;
  password: string;
}
export interface IMenuList {
  id: number;
  url: string;
  name: string;
  isMenu: number;
  pId: number;
  status: number;
  createUser: any; // TODO: Typeof IUser ？
  createDate: string;
  updateUser: any; // TODO: Typeof IUser ？
  updateDate: string;
  code: string;
  remark: string;
  permissionList: Array<IMenuList>;
}
export interface ILoginResponseData {
  id: number;
  appKey: string;
  secret: string;
  type?: number;
  phone?: string;
  email?: string;
  nickname?: string;
  createDate?: string;
  updateDate?: string;
  status?: number;
  busiType?: number;
  password?: string;
  userId?: string;
  permList?: Array<IMenuList>;
}
export interface ILoginResponse {
  code: number;
  data: ILoginResponseData;
  msg: string;
}
