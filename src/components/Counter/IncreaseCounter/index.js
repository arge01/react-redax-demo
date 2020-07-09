import React , { Component }  from 'react';
import { bindActionCreators } from "redux";
import { incrementCounter }   from "../../../redux/actions/counter";
import { connect }            from "react-redux";

class IncreaseCounter extends Component {
    render() {
        return (
            <> 
                <button onClick={ () => this.props.dispatch(incrementCounter()) }>+1</button>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {actions: bindActionCreators(incrementCounter, dispatch)}
};

export default connect(mapDispatchToProps)(IncreaseCounter);
