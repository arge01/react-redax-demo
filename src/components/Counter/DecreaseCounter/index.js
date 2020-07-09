import React , { Component }  from 'react';
import { bindActionCreators } from "redux";
import { decreaseCounter }    from "../../../redux/actions/counter";
import { connect }            from "react-redux";

class DecreaseCounter extends Component {
    render() {
        return (
            <>
                <button onClick={ () => this.props.dispatch(decreaseCounter()) }>-1</button>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return { actions: bindActionCreators(decreaseCounter, dispatch) }
};

export default connect(mapDispatchToProps)(DecreaseCounter);
