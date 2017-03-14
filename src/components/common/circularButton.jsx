import React from 'react';

const circularButton = (props) => {
    const colored = props.colored ? 'mdl-button--colored' : '';
    return (
        <button className={`mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab mdl-button--mini-fab ${colored}`}
            onClick={props.onClick}>
            <i className="material-icons">{props.icon}</i>
        </button>
    );
};

export default circularButton;