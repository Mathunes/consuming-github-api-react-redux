const initialState = {
    loading: false,
    userData: {},
    error: null,
    found: false
}

export default function searchUser(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_USER_STARTED':
            return {
                loading: true
            };
        case 'SEARCH_USER_SUCCESS':
            return {
                userData: action.userData,
                loading: false,
                error: null,
                found: true
            };
        case 'SEARCH_USER_FAILURE':
            return {
                userData: action.userData,
                loading: false,
                error: action.payload.error,
                found: false
            };
        default:
            return state;
    }
}