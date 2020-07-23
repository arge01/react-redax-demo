/*
* stateleri props olarak kullanmak için
 */
import React , { Component } from 'react';
import { connect }           from 'react-redux';
import {HooksDemo} from '../hooksdemo';
import ClassComponent from '../classDemo';
import Axios from 'axios';

class Counter extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            getListData: [],
            responseData: [],
            search: "",
            loading: false,
            err: false
        }
    }

    render() {
        return (
            <>
                <h1>Redux = {this.props.counter}</h1>
                <HooksDemo counter={this.props.counter}/>
                <ClassComponent counter={this.props.counter}/>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counterReducer,
        //new_data: state.newData
    }
};

export default connect(mapStateToProps)(Counter);
