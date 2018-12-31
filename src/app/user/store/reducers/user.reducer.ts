import { UserActions } from "../actions";
import { ILoginResponse } from "../models/user";
import {
  IGetPayMethodListResponse,
  IGetPayTypeListResponse,
  IAddPayMethodRequest,
  IAddPayMethodResponse,
  IGetPayMethodByIdResponse
} from "../models/pay-method";

export interface State {
  loginResponse: ILoginResponse | null;

  // 支付方式
  getPayMethodListResponse: IGetPayMethodListResponse | null;
  getPayTypeListResponse: IGetPayTypeListResponse | null;
  getPayMethodByIdResponse: IGetPayMethodByIdResponse | null;
  pending: boolean;
}

export const initialState: State = {
  loginResponse: {
    code: -1,
    data: {
      id: 0,
      appKey: "",
      secret: ""
    },
    msg: "error"
  },

  // 支付方式
  getPayMethodListResponse: {
    code: -1,
    data: [],
    msg: "error"
  },
  getPayTypeListResponse: {
    code: -1,
    data: [],
    msg: "error"
  },
  getPayMethodByIdResponse: {
    code: -1,
    msg: "error",
    data: {}
  },
  pending: true
};

export function reducer(
  state = initialState,
  action: UserActions.UserActionsUnion
): State {
  switch (action.type) {
    case UserActions.UserActionTypes.Login: {
      return {
        ...state,
        pending: true
      };
    }

    case UserActions.UserActionTypes.LoginSuccess: {
      return {
        ...state,
        loginResponse: action.payload.res,
        pending: false
      };
    }

    case UserActions.UserActionTypes.LoginError: {
      return {
        ...state,
        pending: false
      };
    }

    // 支付方式
    case UserActions.UserActionTypes.GetPayMethodList: {
      return {
        ...state,
        pending: true
      };
    }
    case UserActions.UserActionTypes.GetPayMethodListSuccess: {
      return {
        ...state,
        getPayMethodListResponse: action.payload.res,
        pending: false
      };
    }
    case UserActions.UserActionTypes.GetPayMethodListError: {
      return {
        ...state,
        pending: false
      };
    }

    case UserActions.UserActionTypes.GetPayTypeList: {
      return {
        ...state,
        pending: true
      };
    }
    case UserActions.UserActionTypes.GetPayTypeListSuccess: {
      return {
        ...state,
        getPayTypeListResponse: action.payload.res,
        pending: false
      };
    }
    case UserActions.UserActionTypes.GetPayTypeListError: {
      return {
        ...state,
        pending: false
      };
    }

    case UserActions.UserActionTypes.AddPayMethod: {
      return {
        ...state,
        pending: true
      };
    }
    case UserActions.UserActionTypes.AddPayMethodSuccess: {
      return {
        ...state,
        pending: false
      };
    }
    case UserActions.UserActionTypes.AddPayMethodError: {
      return {
        ...state,
        pending: false
      };
    }

    case UserActions.UserActionTypes.GetPayMethodById: {
      return {
        ...state,
        pending: true
      };
    }
    case UserActions.UserActionTypes.GetPayMethodByIdSuccess: {
      return {
        ...state,
        getPayMethodByIdResponse: action.payload.res,
        pending: false
      };
    }
    case UserActions.UserActionTypes.GetPayMethodByIdError: {
      return {
        ...state,
        pending: false
      };
    }
    default: {
      return state;
    }
  }
}
