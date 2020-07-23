/*
* stateleri props olarak kullanmak için
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
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

    componentDidMount() {

        Axios.post("https://testdinamikotoapi.yuceyazilim.com.tr/api/services/app/UrunAramaService/Columns")
            .then(res => this.setState({ getListData: res.data.result }))
            .catch(err => console.log(err));

        if (document.querySelector("link[rel=\"manifest\"]")) {
            this.setState({ manifest: "You Have A Manifest" })
        } else {
            this.setState({ manifest: "You Don't Have A Manifest" })
        }
    }

    searchSubmit = () => {

        this.setState({ loading: true })
        const data = JSON.stringify({ ara: this.state.search, sayfa: 1 })

        const config = {
            method: "post",
            url:
                "https://testdinamikotoapi.yuceyazilim.com.tr/api/services/app/UrunAramaService/SearchProduct",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        }

        Axios(config)
            .then(response => {
                this.setState({ responseData: response.data.result, loading: false })
            })
            .catch(error => {
                this.setState({ loading: false, err: true })
                console.log(error)
            })
    }

    jsonColumn = (obj, column) => {
        const columnRes = column.veriTabaniSutunu
        let colmunRest = ""

        if (typeof columnRes === "string")
            colmunRest = columnRes.charAt(0).toLowerCase() + columnRes.slice(1)

        return obj[colmunRest]
    }

    render() {
        return (
            <>
                <p>
                    <input
                        name="search"
                        type="text"
                        onChange={event => this.setState({ search: event.target.value })}
                        placeholder="Ürün adı"
                        onKeyDown={(e) => e.keyCode === 13 && this.searchSubmit()}
                    />
                    {this.state.loading && <p style={{ padding: "30px", color: "red", fontWeight: "bold" }}>
                        Yükleniyor...
                    </p>}
                        {this.state.err && <p style={{ padding: "30px", color: "red", fontWeight: "bold" }}>
                            Sorgulama hatası!
                    </p>}
                </p>
                <table>
                    <thead>
                        <tr>
                            <th key={0}>#</th>
                            {this.state.getListData.map((val, key) => {
                                return <th data-veri-tabani-sutunu={val.veriTabaniSutunu} key={key}>{val.sutunAdi}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.responseData.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td key={key}>{key += 1}</td>
                                    {
                                        this.state.getListData.map(list => {
                                            return (
                                                <td key={list.veriTabaniSutunu}>
                                                    {
                                                        this.jsonColumn(val, list)
                                                    }
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
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
