
import React, { Component } from 'react';



class InputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''};
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({text: e.target.value});

    }
    onSubmit(e) {
        e.preventDefault();
        this.setState({
            text:'',
        });
    }

    render() {
        return (
            <div >
                <form  id="myform" onSubmit={(e) => this.onSubmit(e)}>
                    <input type="text" ref={(input) => this.text = input} onChange={this.onChange} value={this.state.text} placeholder="Enter a task" />
                    <input type="submit"  value="ADD TODO"/>
                </form>
            </div>
        );
    }
}

export default InputForm;