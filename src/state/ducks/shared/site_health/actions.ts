import types from "./types";

export function raise404Error(payload) {
    return {
        type: types.SITE_HEALTH_404_ERROR,
        payload: {
            is_404: true,
            global_error: payload
        }
    }
}




const actions = {
    raise404Error
};

export default actions;
