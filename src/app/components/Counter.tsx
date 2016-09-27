import * as React from "react";
import {createStore} from "redux";

interface ICounterAction {
    type: string;
    by: number;
}

interface ICounterState {
    counter: number;
}

let store = createStore(
    (state: ICounterState, action: ICounterAction) => {
        switch (action.type) {
            case "INCR":
                return {counter: state.counter + action.by};
            default:
                return state;
        }
    },
    {counter: 0});

export default class Counter extends React.Component<{}, ICounterState> {

    private unsubscribe: Function;

    public render() {
        return (
            <div>
                <p>
                    <label>Counter: </label><b>#{store.getState().counter}</b>
                </p>
                <button className="btn btn-primary" onClick={e => store.dispatch({ by: 1, type:"INCR" }) }>INCREMENT
                </button>
                <span style={{ padding: "0 5px" }}/>
                <button className="btn btn-default" onClick={e => store.dispatch({ by: -1, type:"INCR"}) }>DECREMENT
                </button>
            </div>
        );
    }

    private componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    private componentWillUnmount() {
        this.unsubscribe();
    }
}
