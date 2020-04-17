import React, { Component } from 'react';
import { Row } from 'reactstrap';
export default class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            str: '',
            copied: false,
            quote: ''
        }
    }
 
    optionChange = (event) => {
        this.setState({
            selected: event.target.value,
            str: '',
            copied: false,
            quote: this.props.data[this.state.selected].quote
        });
    }
    inputChange = (event) => {
        this.setState({
            str: event.target.value.trim().replace(/ /g, '_'),
            copied: false,
            quote: this.props.data[this.state.selected].quote
        });
    }
    // ${this.props.data[this.state.selected].quote}
    copyText = () => {
        this.setState({
            copied: true
        });
        navigator.clipboard.writeText(`${this.props.data[this.state.selected].command} ${this.state.quote}${this.state.str}${this.state.quote}`)
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
        const quote = data[selected].quote === '"' ? '"' : '';
        console.log(quote);
        const description = str.length === 0 ? data[selected].descWithoutInput : data[selected].descWithInput;
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
                            <p className="form-control main__command">{data[selected].command} {quote}{str}{quote}</p>
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

