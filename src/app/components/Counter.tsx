import * as React from "react";
import {INCR_ACTION} from "../actions";


export interface StateProps {
    counter: number;
}

export interface DispatchProps {
    onClick(val: number): INCR_ACTION;
}

const Counter: React.StatelessComponent<StateProps & DispatchProps> =
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

export default Counter;
