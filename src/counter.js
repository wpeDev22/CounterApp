import React, { Component } from 'react';
import { Card, Button } from 'antd';
import './App.css';
import 'antd/dist/antd.css';


class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            error: ''
        };
    }
    increment = (e) => {

        this.setState({
            count: this.state.count < 10 ? this.state.count + 1 : this.state.count,
            error: this.state.count >= 10 ? "\u{1F61A}Maximum value is 10 \u{1F61A}" : ''
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count > 0 ? this.state.count - 1 : this.state.count,
            error: this.state.count <= 0 ? "\u{1F61A}Minimum  value is 0 \u{1F61A} " : ''
        });
    };

    reset = () => {
        this.setState({
            count: 0,
            error: " \u{1F61A}You set this value to 0 \u{1F61A}"
        });
    };

    render() {
        return (
            <div className="site-card-border-less-wrapper">
                <Card title="React Counter App" bordered={true} style={{ backgroundColor: '#F2B69A', zIndex: 2, borderRadius: 20 }} className="text-center mt-5 ">
                    <h2 className="text-center">{this.state.count}</h2>
                    <h4> {this.state.error ? this.state.error : ''}</h4>
                    <Button type="primary" shape="round" onClick={this.increment} > Increment</Button>
                     &nbsp;
                    <Button type="dashed" onClick={this.decrement} className='bg-success text-white' shape="round"  > Decrement</Button>
                        &nbsp;
                    <Button type="danger" onClick={this.reset} shape="round" > Reset</Button>
                </Card>
            </div >
        )
    }
}

export default Counter;
