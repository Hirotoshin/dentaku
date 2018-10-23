import React from 'react';
import PropTypes from 'prop-types';

const Clearbtn = (onClick) => (
    <button onClick={onClick}>C</button>
);

Clearbtn.prototype ={
    onclick:PropTypes.func.isRequired
};

export default Clearbtn;