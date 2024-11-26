import { REGISTER_SUCCESS, REGISTER_ERROR, REGISTER_PENDING } from "./actions";

const initialState = {
    success: false,
    error: false,
    pending: false,
    };

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                success: true,
                error: false,
                pending: false,
            };
        case REGISTER_ERROR:
            return {
                ...state,
                success: false,
                error: true,
                pending: false,
            };
        case REGISTER_PENDING:
            return {
                ...state,
                success: false,
                error: false,
                pending: true,
            };
        default:
            return state;
    }
}
