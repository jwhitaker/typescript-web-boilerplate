import * as React from "react";
import * as Redux from "redux";
import {connect} from "react-redux";

// Our increment action
const INCR_ACTION = "INCR";
interface IncrAction extends Redux.Action {
    type: "INCR";
    by: number;
}

// Component properties that will be updated by the Redux state
interface StateProps {
    counter: number;
}

// Component properties that will dispatch a Redux state update
interface DispatchProps {
    onClick(val: number): IncrAction;
}

// All properties of the component merged together
type CounterProps = StateProps & DispatchProps;

// Increment action generator function, takes a value and returns an increment action
const clickIncrement = function (incr: number): IncrAction {
    return {
        type: "INCR",
        by: incr
    };
};

// Reducer function. This guy takes the current staet and an action, and returns the new state
export const reducer: Redux.Reducer<StateProps> = function (state: StateProps = {counter: 0}, action: IncrAction): StateProps {
    switch (action.type) {
        case INCR_ACTION:
            return {counter: state.counter + action.by};
        default:
            return state;
    }
};

const CounterView: React.StatelessComponent<{counter: number, onClick(val: number): IncrAction}> =
    ({counter, onClick}) => (
        <div>
            <p>
                <label>Counter: </label><b>#{counter}</b>
            </p>
            <button className="btn btn-primary" onClick={() => onClick(1)}>INCREMENT
            </button>
            <span style={{ padding: "0 5px" }}/>
            <button className="btn btn-default" onClick={() => onClick(-1)}>DECREMENT
            </button>
        </div>
    );

function mapStateToProps(state: StateProps) {
    return {
        counter: state.counter
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        onClick: (incr: number) => {
            dispatch(clickIncrement(incr));
        }
    };
}


export const Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterView);
