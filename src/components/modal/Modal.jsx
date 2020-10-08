import React, { Fragment }from 'react';
import propTypes from 'prop-types';
import Portal from '../portal/Portal.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import classes from './modal.module.css';
import Form from '../form/Form.jsx';

const Modal = ({title, isOpen, onCancel, onSubmit}) => {
	return(
		<Fragment>
		{ isOpen &&
			<Portal>
				<div className={classes.modalOverlay}>
					<div className={classes.modalWindow}>
						<div className={classes.modalHeader}>
							<div>Let's talk. Пообщаемся!</div>
							<i onClick={onCancel} className={"fa fa-times fa-lg " + classes.icon_times} aria-hidden="true"></i>
						</div>
						<div className={classes.modalBody + ' mt-1 ml-5'}>
							<span>Job or coffee. Работа или кофеек</span><br/>
							<i className="fa fa-phone mt-2" aria-hidden="true"></i>
							<span className='ml-2'>+380674165386</span> <br/>
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<span className='ml-2'>elizabethnadeevaa@gmail.com</span>
							<div className='mt-3'>
								<Form />
							</div>
						</div>
					</div>
				</div>
			</Portal>
		}
		</Fragment>
	)
}
Modal.propTypes = {
	title: propTypes.string,
	isOpen: propTypes.bool,
	onCancel: propTypes.func,
	onSubmit: propTypes.func,
};

Modal.defaultProps = {
	title: 'Modal title',
	isOpen: false,
	onCancel: () => {},
	onSubmit: () => {},


}

export default Modal;





