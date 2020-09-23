import {
    ADD_TREATMENT,
    ADD_TREATMENT_SUCCESS,
    ADD_TREATMENT_ERROR,
    EDIT_PROFILE,
    EDIT_PROFILE_SUCCESS,
    EDIT_PROFILE_ERROR,
    DELETE_PROFILE,
    DELETE_PROFILE_SUCCESS,
    DELETE_PROFILE_ERROR,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
} from '../actions'

const initialState = {
    email: '',
    password: '', 
    error: '',
    isFetching: false,
    savedStrains: [],
    symptoms: {
        'cramps': false, 
        'depression': false, 
        'eye pressure': false,
        'fatigue': false, 
        'headache': false,
        'headaches': false,
        'inflammation': false, 
        'insomnia': false, 
        'lack of appetite': false, 
        'muscle spasms': false, 
        'nausea': false, 
        'pain': false, 
        'seizures': false, 
        'spasticity': false,
        'stress': false,
    }
}

export const reducer = (state = initialState, action) => {
    console.log("ACTION FROM OUR REDUCER ===>", action);
    switch(action.type) {
        case ADD_TREATMENT: 
            return {
                ...state,
                isFetching: true,
            }
        case ADD_TREATMENT_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                symptoms: {
                    ...state.symptoms,
                    action
                }
            }
        case ADD_TREATMENT_ERROR: 
            return {
                ...state,
                isFetching: false,
                error: action.payload.message,
            }
        case EDIT_PROFILE: 
            console.log(action, state)
            return {
                ...state,
                isFetching: true,
            }
        case EDIT_PROFILE_SUCCESS: 
            return {
                ...state,
                email: action.payload,
                password: action.payload,
                isFetching: false,
            }
        case EDIT_PROFILE_ERROR: 
            return {
                ...state,
                isFetching: false,
                error: action.payload.message,
            }
        case DELETE_PROFILE: 
            console.log(action.payload)
            return {
                ...state,
                username: action.payload,
                password: action.payload,
                isFetching: true,
            }
        case DELETE_PROFILE_SUCCESS: 
            return {
                ...state,
                username: action.payload,
                password: action.payload,
                isFetching: false,
            }
        case DELETE_PROFILE_ERROR: 
            return {
                ...state,
                isFetching: false,
                error: action.payload.message,
            }
        case LOGIN_USER: 
            console.log(action.payload)
            return {
                ...state,
                isFetching: true,
            }
        case LOGIN_USER_SUCCESS: 
            const loginCreds = JSON.parse(action.payload)
            return {
                ...state,
                email: loginCreds.email,
                password: loginCreds.password,
                isFetching: false,
            }
        case LOGIN_USER_ERROR: 
            return {
                ...state,
                isFetching: false,
                error: action.payload.message,
            }
        case REGISTER_USER: 
            return {
                ...state,
                isFetching: true,
            }
        case REGISTER_USER_SUCCESS: 
        const registerCreds = action.payload
            return {
                ...state,
                email: registerCreds.email,
                password: registerCreds.email,
                isFetching: false,
            }
        case REGISTER_USER_ERROR: 
            return {
                ...state,
                isFetching: false,
                error: action.payload.message,
            }

        default: 
            return state;
    }
}
