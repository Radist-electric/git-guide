import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';

export default class Multiselect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            str: '',
            copied: false,
            inputs: []
        }
        this.props.data[0].input.map((info) => {
            this.state.inputs.push(info);
        });
    }

    inputChange = (event) => {
        const arr = this.state.inputs.map((name, i) => {
            console.log(name);
            console.log(i);
            let elem = i == event.target.name ? name : event.target.value;
            return {
                elem
            }
        });
        console.log(arr);
        // console.log(this.state.inputs[event.target.name]);
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
        // console.log(event.target.name);
        this.setState({
            // inputs[event.target.name]: event.target.value,
            // inputText: `${event.target.value.trim()}`,
            // str: `${this.state.splice}${this.state.quote}${event.target.value.trim()}${this.state.quote}`,
            copied: false,
        });
    }

    optionChange = (event) => {
        // const inputs = this.props.data[event.target.value].input.map((info) => {
        //     return {
        //         info
        //     }
        // });
        // let howMany = this.props.data[event.target.value].input.length;
        // console.log(howMany);
        let arr = new Array(this.props.data[event.target.value].input.length);
        // const inputs = this.props.data[event.target.value].input.map(elem => '');
        this.setState({
            selected: event.target.value,
            copied: false,
            inputs: arr
        });
    };

    copyText = () => {
        this.setState({
            copied: true
        });
        navigator.clipboard.writeText(`${this.props.data[this.state.selected].command}${this.state.str}`)
            .then(() => {
                setTimeout(() => {
                    this.setState({
                        copied: false
                    });
                }, 2000);
            })
            .catch(err => {
                console.log('Что-то пошло не так...', err);
            })
    }


    render() {
        // this.state.inputs.map((info, index) => {
        //     console.log(this.state.inputs[index]);
        // });
        // console.log(this.state.inputs[0]);
        // console.log(this.state.inputs);
        let copiedClass = '',
            copiedText = 'Скопировать';
        if (this.state.copied) {
            copiedClass = 'copied';
            copiedText = 'Скопировано!';
        }
        const { str, selected } = this.state;
        const data = this.props.data;
        const options = this.props.data.map((info, index) => {
            return (
                <option value={index} key={index}>{info.command}</option>
            )
        });
        const inputs = this.props.data[selected].input.map((info, index) => {
            return (
                <Col xl="6" key={index}>
                    <Input
                        name={index}
                        placeholder={info}
                        onInput={this.inputChange} />
                </Col>
            )
        });
        const description = data[selected].description;

        return (
            <>
                <div className="main__block">
                    <Row>
                        <Col xl="6">
                            <select value={selected} className="custom-select" onChange={this.optionChange}>
                                {options}
                            </select>
                        </Col>
                        {inputs}
                        <Col xs="12">
                            <p className="main__description">{description}</p>
                            <p className="small mb-0">Скопируйте полученную команду в буфер обмена</p>
                        </Col>
                        <Col xl="10" md="9">
                            <p className="form-control main__command">{data[selected].command}{str}</p>
                        </Col>
                        <Col xl="2" md="3">
                            <Button outline block color="primary" className={copiedClass} onClick={this.copyText}>{copiedText}</Button>
                        </Col>
                    </Row>
                </div>
                <hr className="my-4" />
            </>
        );
    }
}

