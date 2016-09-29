import {Action, INCR_ACTION} from "../actions";
import {StateProps} from "../components/Counter";
import {Reducer} from "redux";

const counter: Reducer<StateProps> = function (state: StateProps = {counter: 0}, action: Action<INCR_ACTION>): StateProps {
    switch (action.type) {
        case INCR_ACTION:
            return {counter: state.counter + action.payload.by};
        default:
            return state;
    }
};

export default counter;
