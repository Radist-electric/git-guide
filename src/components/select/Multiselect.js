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
    }

    inputChange = (event) => {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
        // console.log(event.target.name);
        let str = '';
        const arr = this.state.inputs.map((item, i) => {
            let curCommand = i === +event.target.name ? event.target.value.trim() : item;
            str += ` ${curCommand}`;
            return curCommand;
        });

        this.setState({
            copied: false,
            inputs: arr,
            str: str
        });
    }

    optionChange = (event) => {
        let arr = new Array(this.props.data[event.target.value].input.length).join(".").split(".");
        this.setState({
            selected: event.target.value,
            copied: false,
            inputs: arr,
            str: ''
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
        let copiedClass = '',
            copiedText = 'Скопировать';
        if (this.state.copied) {
            copiedClass = 'copied';
            copiedText = 'Скопировано!';
        }
        const { str, selected, inputs } = this.state;
        const data = this.props.data;
        const options = data.map((info, index) => {
            return (
                <option value={index} key={index}>{info.command}</option>
            )
        });
        const showInputs = data[selected].input.map((info, index) => {
            return (
                <Col xl="6" key={index}>
                    <Input
                        name={index}
                        placeholder={info}
                        onInput={this.inputChange} />
                </Col>
            )
        });
        let description = data[selected].description;
        for (let i = 0; i < inputs.length; i++) {
            description = description.replace("[input]", `"${inputs[i]}"`);
        }

        return (
            <>
                <div className="main__block">
                    <Row>
                        <Col xl="6">
                            <select value={selected} className="custom-select" onChange={this.optionChange}>
                                {options}
                            </select>
                        </Col>
                        {showInputs}
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

