import React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import './button.css';


const Button = ({children, cssClasses, onClick, disabled, className}) => {
	const onClickAction = e => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  const classes = classNames(
   'btn',
   className,
  );

	return(
		<button className={classes} className={cssClasses} disabled={disabled} onClick={onClickAction}>{children}</button>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	className: PropTypes.string,

};

Button.defaultProps = {
	children: 'default button',
	disabled: false,
	onClick: () => {},
	className: '',

};


export default Button;