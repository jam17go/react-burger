import { REGISTER_SUCCESS, REGISTER_ERROR, REGISTER_PENDING } from "./actions";
import { TRegistrationActions } from "./actions";

type TRegistrationState = {
    success: boolean,
    error: boolean,
    pending: boolean,
};

const initialState = {
    success: false,
    error: false,
    pending: false,
    };

export const registrationReducer = (state = initialState, action: TRegistrationActions): TRegistrationState => {
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
