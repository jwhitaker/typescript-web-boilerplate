import Counter from "../components/Counter";
import {clickIncrement} from "../actions";
import {connect} from "react-redux";


function mapStateToProps(state: any) {
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

const ConnectedCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default ConnectedCounter;
