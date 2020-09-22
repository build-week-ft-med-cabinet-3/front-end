import axios from 'axios';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// action types
export const ADD_TREATMENT = 'ADD_TREATMENT';
export const ADD_TREATMENT_SUCCESS = 'ADD_TREATMENT_SUCCESS';
export const ADD_TREATMENT_ERROR = 'ADD_TREATMENT_ERROR';

export const EDIT_PROFILE = 'EDIT_PROFILE'
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS'
export const EDIT_PROFILE_ERROR = 'EDIT_PROFILE_ERROR'

export const DELETE_PROFILE = 'DELETE_PROFILE'
export const DELETE_PROFILE_SUCCESS = 'DELETE_PROFILE_SUCCESS'
export const DELETE_PROFILE_ERROR = 'DELETE_PROFILE_ERROR'

// action creators

// Add Treatment Action
export const addTreatment = () => {
    return (dispatch) => {
        dispatch({ type: ADD_TREATMENT});
        axios
            .get('test') // to update
            .then(res => {
                console.log(res);
                dispatch({
                    type: ADD_TREATMENT_SUCCESS, 
                    payload: res.data.all
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: ADD_TREATMENT_ERROR,
                    payload: {
                        message: 'Cant return'
                    }
                })
            });
    }
}

// Edit Profile Action
// export const editProfile = () => {
//     return (dispatch) => {
//         dispatch({ type: EDIT_PROFILE});
//         axios
//             .put('auth/', credentials)
//             .then(res => console.log(res))
//             .catch(err => console.log(err))
//     }
// }

// // Delete Profile Action
// export const deleteProfile = () => {
//     return (dispatch) => {
//         dispatch({ type: DELETE_PROFILE});
//         axios
//             .put('auth/', credentials) // to update 
//             .then(res => console.log(res))
//             .catch(err => console.log(err))
//     }
// }