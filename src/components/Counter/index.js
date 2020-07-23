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
            getListData: []
        }
    }
    componentDidMount(){
        Axios.post("https://testdinamikotoapi.yuceyazilim.com.tr/api/services/app/UrunAramaService/Columns")
        .then(res => this.setState({getListData: res.data.result}) )
        .catch(err => console.log(err) );
    }

    render() {
        return (
            <>
                <h1>Redux = {this.props.counter}</h1>
                <HooksDemo counter={this.props.counter}/>
                <ClassComponent counter={this.props.counter}/>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th key={0}>#</th>
                                {this.state.getListData.map((val, key) => {
                                    return <th data-veri-tabani-sutunu={val.veriTabaniSutunu} key={key}>{val.sutunAdi}</th>
                                })}
                            </tr>
                        </thead>
                    </table>
                </div>
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
