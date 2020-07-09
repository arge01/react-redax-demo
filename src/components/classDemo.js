import React, { Component } from 'react'

class ClassComponent extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        const {count} = this.state;
        let {counter} = this.props;
        return (
            <>
                <h1>
                    Component = {count}, {counter}
                </h1>
                <button onClick={() => this.setState({count: count + 1})}>Componentte Artır</button>
                <button onClick={() => counter = this.props.counter + 1}>Componentte Redux Artır</button>
            </>
        )
    }
}

export default ClassComponent