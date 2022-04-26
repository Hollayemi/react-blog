import * as Types from "./types";

const Reducer = (state, action) => {
    switch (action.type) {
        case Types.SET_CONTENT:
            return {
                ...state,
                loading:true
            }

        default:
            return state;
    }
}

export default Reducer