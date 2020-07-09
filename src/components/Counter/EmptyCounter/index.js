import React , { Component }  from 'react';
import { bindActionCreators } from "redux";
import { connect }            from "react-redux";
import { emptyCounter }       from "../../../redux/actions/counter";

class EmptyCounter extends Component {
    render() {
        return (
            <>
                <button className="empty" onClick={ () => this.props.dispatch(emptyCounter()) }>Empty</button>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return { actions: bindActionCreators(emptyCounter, dispatch) }
}

export default connect(mapDispatchToProps)(EmptyCounter);
