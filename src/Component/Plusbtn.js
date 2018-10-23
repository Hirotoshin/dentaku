import React from 'react';
import PropTypes from 'prop-types';

const Plusbtn = ({onClick}) => (
    <button onClick={onClick}>+</button>
);

Plusbtn.propTypes = {
    onclick:PropTypes.func.isRequired
};

export default Plusbtn;
