import { DECREMENT, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, INCREMENT } from "./actionTypes";

const initialState = {
    count: 0,
    todos: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case INCREMENT: {
            return {
                ...state,
                count: state.count + payload,
            }
        }
        case DECREMENT: {
            return {
                ...state,
                count: state.count - payload,
            }
        }

        case GET_TODO_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }

        case GET_TODO_SUCCESS: {
            return {
                ...state,
                todos: payload,
                isLoading: false
            }
        }

        case GET_TODO_FAILURE: {
            return {
                ...state,
                isError: true,
            }
        }

        default: {
            return state;
        }
    }
}