import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from "@ngrx/store";
import * as fromUser from "./user.reducer";
import * as fromRoot from "../../../reducers/index";
import { UserActions } from "../actions";
import { GetPayMethodById } from "../actions/user.actions";

export interface UserState {
  user: fromUser.State;
}

export interface State extends fromRoot.State {
  user: UserState;
}

export const reducers: ActionReducerMap<
  UserState,
  UserActions.UserActionsUnion
> = {
  user: fromUser.reducer
};

export const getUserState = createFeatureSelector<State, UserState>("user");

export const authMenuList = createSelector(
  getUserState,
  (state: any) => {
    // // 遍历处理一下menuList的格式，以便在layout中直接使用，layout中不好处理
    // const factorial = function f(arr: Array<any>) {
    //   return arr.map(item => {
    //     item.label = item.menuName || "";
    //     item.path = item.menuUrl || "";
    //     item.children = item.nextMenu || [];
    //     if (item.nextMenu.length > 0) {
    //       f(item.nextMenu);
    //     }
    //     return item;
    //   });
    // };
    // const tempFun = factorial;
    // state.user.loginResponse.data.menuList = tempFun(
    //   state.user.loginResponse.data.menuList || []
    // );

    state.user.loginResponse.data.menuList =
      state.user.loginResponse.data.menuList || [];
    // 将数据存储到本地
    // TODO:这样做有一个隐含的问题，就是用户登录后到登录自动失效期间如果再别的地方更改了用户的id或者是用户的权限，此时刷新的话获取到的可能是在其期间更改前的权限数据
    const localStorageKeyName =
      "otc-menuList-u" +
      (!!state.user.loginResponse.data["id"]
        ? state.user.loginResponse.data["id"]
        : 0);
    // 清除旧的缓存，然后更新新的缓存
    localStorage.removeItem(localStorageKeyName);
    localStorage.setItem(
      localStorageKeyName,
      JSON.stringify(state.user.loginResponse.data.menuList)
    );

    return state.user.loginResponse.data.menuList || [];
  }
);

export const loginSuccessRes = createSelector(
  getUserState,
  (state: any) => {
    return state.user.loginResponse.data || {};
  }
);

// deprecated

// Pay Method BEGIN
export const payMethodList = createSelector(
  getUserState,
  (state: any) => {
    if (state.user.getPayMethodListResponse.code === 200) {
      state.user.getPayMethodListResponse.data.map(payMethod => {
        return (payMethod["payName"] = payMethod.payType.payName);
      });
      return state.user.getPayMethodListResponse.data;
    } else {
      return [];
    }
  }
);
export const payTypeList = createSelector(
  getUserState,
  (state: any) => {
    if (state.user.getPayTypeListResponse.code === 200) {
      return state.user.getPayTypeListResponse.data;
    } else {
      return [];
    }
  }
);
export const payMethodInfo = createSelector(
  getUserState,
  (state: any) => {
    if (state.user.getPayMethodByIdResponse.code === 200) {
      return state.user.getPayMethodByIdResponse.data;
    } else {
      return [];
    }
  }
);
// Pay Method END
