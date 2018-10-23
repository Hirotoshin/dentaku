import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../Actions';
import Numbtn from '../Component/Numbtn';
import Plusbtn from '../Component/Plusbtn';
import Result from '../Component/Result';
import Clearbtn from '../Component/Clearbtn';


class CalculatorContainer extends Component{
    render(){
        const {calculator, actions} = this.props;
        return(
            <div>
                <div>
                    <Numbtn n={1} onClick = {() => actions.onNumClick(1)}/>
                    <Numbtn n={2} onClick = {() => actions.onNumClick(2)}/>
                    <Numbtn n={3} onClick = {() => actions.onNumClick(3)}/>
                </div>
                <div>
                    <Numbtn n={4} onClick = {() => actions.onNumClick(4)}/>
                    <Numbtn n={5} onClick = {() => actions.onNumClick(5)}/>
                    <Numbtn n={6} onClick = {() => actions.onNumClick(6)}/>
                </div>
                <div>
                    <Numbtn n={7} onClick = {() => actions.onNumClick(7)}/>
                    <Numbtn n={8} onClick = {() => actions.onNumClick(8)}/>
                    <Numbtn n={9} onClick = {() => actions.onNumClick(9)}/>
                </div>
                <div>
                    <Numbtn n={0} onClick = {() => actions.onNumClick(0)}/>
                    <Plusbtn onClick = {actions.onPlusClick}/>
                    <Clearbtn onClick = {actions.onClearClick} />
                </div>
                <div>
                    <Result result = {calculator.showResult ? calculator.resultValue : calculator.inputValue}/>
                </div>
            </div>
        );
    }
}

const mapState = (state, ownProps) => ({
    calculator:state.calculator
});

function mapDispatch(dispatch) {
    return{
        actions:bindActionCreators(actions, dispatch)
    };
}

export default connect(mapState,mapDispatch)(CalculatorContainer);