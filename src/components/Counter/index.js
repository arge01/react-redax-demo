/*
* stateleri props olarak kullanmak için
 */
import React , { Component } from 'react';
import { connect }           from 'react-redux';
import {HooksDemo} from '../hooksdemo';
import ClassComponent from '../classDemo';

class Counter extends Component {
    render() {
        //console.log(this.props);
        const os = require('os');
        console.log("CPU architecture: " + os.arch());
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
