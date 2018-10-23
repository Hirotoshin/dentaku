//reducerには管理しておくべきデータの状態を記述する
import * as actionTypes from '../Utils/actionTypes';

const initialAppState = {
    inputValue:0,
    resultValue:0,
    showResult:false
}

const calculator = (state = initialAppState, action) => {
    if (action.type ===actionTypes.INPUT_NUMBER){
        return{
            ...state,
            inputValue:state.inputValue * 10 + action.number,
            showResult:false
        };
    } else if (action.type === actionTypes.PLUS){
        return{
            ...state,
            inputValue:0,
            resultValue:state.resultValue + state.inputValue,
            showResult:true
        };
    } else if (action.type === actionTypes.CLEAR) {
        return {
            ...state,
            resultValue:0,
            showResult:true
        }
    } else {
        return state;
    }
};

export default calculator;