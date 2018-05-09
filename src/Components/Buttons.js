import React, {Component} from 'react';
import Button from "./Button";

const NUMBERS = [7,8,9,4,5,6,1,2,3,0];

const OPERATORS = {
    ADD : '+',
    SUBTRACT : '-',
    MULTIPLY : 'x',
    DIVIDE : '/'
};

const EXPRESSIONS = {
    DECIMAL : '.',
    CLEAR : 'AC',
    EQUAL : '='
};

const TYPES = {
    NUMBER : 'number',
    OPERATOR : 'operator',
    CLEAR : 'clear',
    DECIMAL : 'decimal',
    EQUAL : 'equal'
};

class Buttons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: '',
            storage: '',
            number: this.props.number,
            operator: ''
        }
    }

    handleNumber = (number) => {
        let displayNumber;
        if(this.state.number === '0' || this.state.buttonClicked === TYPES.OPERATOR || this.state.buttonClicked === TYPES.EQUAL) {
            displayNumber = number;
        } else {
            displayNumber = this.state.number + "" + number;
        }
        this.props.buttonClicked( displayNumber );
        this.setState({buttonClicked : TYPES.NUMBER, number : displayNumber});
    };

    handleOperation = (operationType) => {
        if( this.state.number === '0') return;
        switch(operationType) {
            case OPERATORS.ADD:
                this.setState({storage : this.state.number, buttonClicked: TYPES.OPERATOR, operator: OPERATORS.ADD});
                break;
            case OPERATORS.SUBTRACT:
                this.setState({storage : this.state.number, buttonClicked: TYPES.OPERATOR, operator: OPERATORS.SUBTRACT});
                break;
            default:
                return 0;
        }
    };

    handleEqual = () => {
       if (this.state.buttonClicked === TYPES.EQUAL) {
           this.state.result;
       }
    };

    render() {

        return (
            <div className="calculator__types">

                <Button styled="type--operator" operation={this.handleOperation} value={OPERATORS.ADD}/>
                <Button styled="type--operator" operation={this.handleOperation} value={OPERATORS.SUBTRACT}/>
                <Button styled="type--operator" operation={this.handleOperation} value={OPERATORS.MULTIPLY}/>
                <Button styled="type--operator" operation={this.handleOperation} value={OPERATORS.DIVIDE}/>

                { NUMBERS.map((n) => <Button operation={this.handleNumber} value={n} type={n}/>)}

                <Button operation={this.handleDecimal} value={EXPRESSIONS.DECIMAL}/>
                <Button operation={this.handleClear} value={EXPRESSIONS.CLEAR}/>
                <Button styled="type--equal" operation={this.handleEqual} value={EXPRESSIONS.EQUAL}/>
            </div>
        );
    }

}


export default Buttons;