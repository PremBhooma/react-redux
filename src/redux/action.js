import { DECREMENT, INCREMENT } from "./actionTypes"

export const incrementCounter = (payload) => {
    return { type: INCREMENT, payload: payload }
}

export const decrementCounter = (payload) => {
    return { type: DECREMENT, payload: payload }
}