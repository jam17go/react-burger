import { GET_USER_SUCCESS, GET_USER_ERROR, GET_USER_PENDING, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_PENDING } from "./actions";

const initialState = {
    user: {},
    loading: false,
    error: null,
    };

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PENDING:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
            };
        case GET_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case UPDATE_USER_PENDING:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
            };
        case UPDATE_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
