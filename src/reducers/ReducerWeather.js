import { FETCH_WEATHER } from '../actions'
export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
        console.log(state)
            return state.concat([action.payload.data]);
    }
    console.log(action);
    return state;
}