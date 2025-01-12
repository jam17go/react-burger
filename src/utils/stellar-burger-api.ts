import { ENDPOINTS } from "../config/api";
import { IIngredient } from "../services/burger-constructor/actions";

type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

type TResponseGetBurgerIngredients = {
  data: TIngredient[];
  success: boolean;
};

type TResponseRefreshData = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};

type TResponsePostOrder = {
  success: boolean;
  order: {
    number: number;
  };
};

type TResponseResetPassword = {
  success: boolean;
};

type TResponseResetResetPassword = {
  success: boolean;
};

type TResponseRegister = {
  success: boolean;
};

type TResponseLogin = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    name: string;
  };
};

type TResponseLogout = {
  success: boolean;
  message: string;
};

type TResponseGetUser = {
  success: boolean;
  user: {
    email: string;
    name: string;
  };
};

type TResponseUpdateUserInfo = {
  success: boolean;
  user: {
    email: string;
    name: string;
  };
};

type TOrder = {
  _id: string;
  number: string;
  name: string;
  status: string;
  createdAt: string;
  ingredients: string[];
};

type TResponseGetOrder = {
  success: boolean;
  orders: TOrder[];
};

export async function getResponse<T>(res: Response): Promise<T> {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка ${res.status}`);
}

export async function getBurgerIngredients(): Promise<TResponseGetBurgerIngredients> {
  const res = await fetch(ENDPOINTS.INGREDIENTS);
  return await getResponse<TResponseGetBurgerIngredients>(res);
}

export const refreshToken = (): Promise<TResponseRefreshData> => {
  return fetch(ENDPOINTS.REFRESH_TOKEN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  })
    .then(getResponse<TResponseRefreshData>)
    .then((refreshData) => {
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      return refreshData;
    });
};

export const fetchWithRefresh = async <T>(
  url: string,
  options: RequestInit | undefined
): Promise<T> => {
  try {
    const res = await fetch(url, options);
    return await getResponse<T>(res);
  } catch (err) {
    if (err instanceof Error && err.message === "jwt expired") {
      const refreshData = await refreshToken();

      if (options && options.headers && typeof options.headers === "object") {
        (options.headers as Record<string, string>).Authorization =
          refreshData.accessToken;
      }

      const res = await fetch(url, options);
      return await getResponse<T>(res);
    } else {
      return Promise.reject(err);
    }
  }
};

export const postOrder = (
  ingredients: IIngredient[]
): Promise<TResponsePostOrder> => {
  const accessToken = localStorage.getItem("accessToken") || "";

  return fetchWithRefresh<TResponsePostOrder>(ENDPOINTS.ORDERS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
    body: JSON.stringify({
      ingredients: ingredients,
    }),
  });
};

export const getOrder = (
  orderId: string,
): Promise<TResponseGetOrder> => {
  return fetchWithRefresh<TResponseGetOrder>(ENDPOINTS.ORDERS + '/' + orderId, {
    method: "GET",
  });
};

export const passwordResetRequest = (
  email: string
): Promise<TResponseResetPassword> => {
  return fetch(ENDPOINTS.PASSWORD_RESET, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  }).then(getResponse<TResponseResetPassword>);
};

export const passwordResetResetRequest = (
  password: string,
  token: string
): Promise<TResponseResetResetPassword> => {
  return fetch(ENDPOINTS.PASSWORD_RESET_RESET, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      token: token,
    }),
  }).then(getResponse<TResponseResetResetPassword>);
};

export const registerRequest = (
  email: string,
  password: string,
  name: string
): Promise<TResponseRegister> => {
  return fetch(ENDPOINTS.REGISTER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  }).then(getResponse<TResponseRegister>);
};

export const loginRequest = async (
  email: string,
  password: string
): Promise<TResponseLogin> => {
  return fetchWithRefresh<TResponseLogin>(ENDPOINTS.LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((refreshData) => {
    if (!refreshData.success) {
      return Promise.reject(refreshData);
    }
    localStorage.setItem("refreshToken", refreshData.refreshToken);
    localStorage.setItem("accessToken", refreshData.accessToken);
    return refreshData;
  });
};

export const logoutRequest = (): Promise<TResponseLogout> => {
  return fetch(ENDPOINTS.LOGOUT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then((res) => {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");

    return getResponse<TResponseLogout>(res);
  });
};

export const getUserRequest = async (): Promise<TResponseGetUser> => {
  const accessToken = localStorage.getItem("accessToken") || "";

  try {
    return await fetchWithRefresh<TResponseGetUser>(ENDPOINTS.USER, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("accessToken") || "",
      },
    });
  } catch (err) {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    throw err;
  }
};

export const updateUserInfoRequest = (
  name: string,
  email: string,
  password: string
): Promise<TResponseUpdateUserInfo> => {
  const accessToken = localStorage.getItem("accessToken") || "";

  return fetchWithRefresh<TResponseUpdateUserInfo>(ENDPOINTS.USER, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
    body: JSON.stringify({
      email: email,
      name: name,
      password: password,
    }),
  });
};
