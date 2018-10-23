import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Numbtn = ({n,onClick}) => (
    <button onClick={onClick}>{n}</button>
);

Numbtn.propTypes = {
    onclick:PropTypes.func.isRequired
};

export default Numbtn;