import React, {Component} from "react";
import Buttons from "./Buttons";
import Display from "./Display";

const OPERATORS = {
    ADD : '+',
    SUBTRACT : '-',
    MULTIPLY : 'x',
    DIVIDE : '/'
};

class Calculator extends Component {

    state = { result : '0'};

    changeDisplay = (number) => {
        this.setState({result : number});
    };

    calculate = (n1, n2, operator) => {
        let result = '';

        if (operator === OPERATORS.ADD) {
            result = parseFloat(n1) + parseFloat(n2)
        } else if (operator === OPERATORS.SUBTRACT) {
            result = parseFloat(n2) - parseFloat(n1)
        } else if (operator === OPERATORS.MULTIPLY) {
            result = parseFloat(n1) * parseFloat(n2)
        } else if (operator === OPERATORS.DIVIDE) {
            result = parseFloat(n2) / parseFloat(n1)
        }else {
            result = '0';
        }

        this.setState({result : result});
    };

    render() {
        return (
            <div className="container">
                <Display result={this.state.result}/>
                <Buttons calculate={this.calculate} number={this.state.result} buttonClicked={this.changeDisplay} />
            </div>
        );
    }

}

export default Calculator;