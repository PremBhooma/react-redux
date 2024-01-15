import { DECREMENT, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, INCREMENT } from "./actionTypes"

export const incrementCounter = (payload) => {
    return { type: INCREMENT, payload: payload }
}

export const decrementCounter = (payload) => {
    return { type: DECREMENT, payload: payload }
}


// GET TODO


export const getTodoRequest = () => {
    return { type: GET_TODO_REQUEST }
}

export const getTodoSuccess = (payload) => {
    return { type: GET_TODO_SUCCESS, payload: payload }
}

export const getTodoFailure = () => {
    return { type: GET_TODO_FAILURE }
}