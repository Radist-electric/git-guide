import React, { Component } from 'react';
import { Row } from 'reactstrap';
export default class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            str: '',
            copied: false
        }
    }
    optionChange = (event) => {
        this.setState({
            selected: event.target.value,
            copied: false
        });
    }
    inputChange = (event) => {
        this.setState({
            str: event.target.value.trim().replace(/ /g, '_'),
            copied: false
        });
    }
    copyText = () => {
        this.setState({
            copied: true
        });
        navigator.clipboard.writeText(`${this.props.data[this.state.selected].command} ${this.state.str}`)
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
        let copiedClass = 'copied';
        if (this.state.copied) {
            copiedClass += ' copied-active'
        }
        const selects = this.props.data.map((info, index) => {
            return (
                <option value={index} key={index}>{info.command}</option>
            )
        });
        const { str, selected } = this.state;
        const data = this.props.data;
        const description = str.length === 0 ? data[selected].descWithoutInput : data[selected].descWithInput;
        const input = data[selected].input ?
            <div className="col-6">
                <input
                    type="text"
                    className="form-control"
                    placeholder={data[selected].inputPlaceholder}
                    onInput={this.inputChange} />
            </div> : null;
        return (
            <div className="main__block">
                <Row>
                    <div className="col-6">
                        <select value={selected} className="custom-select" onChange={this.optionChange}>
                            {selects}
                        </select>
                    </div>
                    {input}
                    <div className="col-12">
                        <p className="main__description">{description}</p>
                        <p>Скопируйте полученную команду в буфер обмена</p>
                    </div>
                    <div className="col-10">
                        <p className="form-control main__command">{data[selected].command} {str}</p>
                    </div>
                    <div className="col-2">
                        <div className="button-wrap">
                            <p className={copiedClass}>Скопировано!</p>
                            <button className="btn btn-block btn-outline-primary" onClick={this.copyText}>Скопировать</button>
                        </div>
                    </div>
                </Row>
            </div>
        );
    }
}

