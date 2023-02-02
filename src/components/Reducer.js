import {useReducer} from "react";


const actions = {
    ADD: 'ADD',
    DELETE: 'DELETE'
}

const reducer = (state, action) => {
    switch (action.type) {
        case actions.ADD:
            const name = action.payload.name
            const id = state.length ? [state.length - 1].id + 1 : 1
            return [...state, {id, name}]
        case actions.DELETE:
            const index = state.findIndex(cat => cat.id === action.payload.id)
            if (index !== -1) {
                state.splice(index, 1)
            }
            return [...state]
        default:
            return [...state]
    }

}

const Reducer = () => useReducer(reducer, [])

export {Reducer, actions}
