import React, { Component } from 'react';
import { Row } from 'reactstrap';
export default class Select extends Component {
    constructor(props) {
        super(props);
        const tempSplice = this.props.data[0].splice === true ? '' : ' ';
        const tempQuote = this.props.data[0].quote === '"' ? '"' : '';
        this.state = {
            selected: 0,
            splice: tempSplice,
            quote: tempQuote,
            str: `${tempSplice}${tempQuote}${tempQuote}`,
            copied: false,
            inputText: ''
        }
    }

    optionChange = (event) => {
        let inputText,
            quote = this.props.data[event.target.value].quote === '"' ? '"' : '',
            splice = this.props.data[event.target.value].splice === true ? '' : ' ';
        if (this.props.data[event.target.value].input === true) {
            inputText = this.state.inputText;
        } else {
            inputText = '';
            this.setState({
                inputText: ''
            });
        }
        this.setState({
            selected: event.target.value,
            splice: splice,
            quote: quote,
            str: `${splice}${quote}${inputText}${quote}`,
            copied: false
        });
    }

    inputChange = (event) => {
        this.setState({
            inputText: `${event.target.value.trim()}`,
            str: `${this.state.splice}${this.state.quote}${event.target.value.trim()}${this.state.quote}`,
            copied: false,
        });
    }

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
        // console.log(this.state.selected);
        // console.log(this.state.quote);
        // console.log(this.state.str);
        let copiedClass = 'btn btn-block btn-outline-primary',
            copiedText = 'Скопировать';
        if (this.state.copied) {
            copiedClass += ' copied';
            copiedText = 'Скопировано!';
        }
        const selects = this.props.data.map((info, index) => {
            return (
                <option value={index} key={index}>{info.command}</option>
            )
        });
        const { str, selected } = this.state;
        const data = this.props.data;
        const description = str.replace(/[\ \""]/g, '').length === 0 ? data[selected].descWithoutInput : data[selected].descWithInput;
        const input = data[selected].input ?
            <div className="col-xl-6">
                <input
                    type="text"
                    className="form-control"
                    placeholder={data[selected].inputPlaceholder}
                    onInput={this.inputChange} />
            </div> : null;
        return (
            <>
                <div className="main__block">
                    <Row>
                        <div className="col-xl-6">
                            <select value={selected} className="custom-select" onChange={this.optionChange}>
                                {selects}
                            </select>
                        </div>
                        {input}
                        <div className="col-12">
                            <p className="main__description">{description}</p>
                            <p className="small mb-0">Скопируйте полученную команду в буфер обмена</p>
                        </div>
                        <div className="col-xl-10 col-md-9">
                            <p className="form-control main__command">{data[selected].command}{str}</p>
                        </div>
                        <div className="col-xl-2 col-md-3">
                            <div className="button-wrap">
                                <button className={copiedClass} onClick={this.copyText}>{copiedText}</button>
                            </div>
                        </div>
                    </Row>
                </div>
                <hr className="my-4" />
            </>
        );
    }
}

