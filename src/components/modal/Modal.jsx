import React, { Fragment }from 'react';
import propTypes from 'prop-types';
import Portal from '../portal/Portal.jsx';
import classes from './modal.module.css';
import Form from '../form/Form.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faTimes} from '@fortawesome/free-solid-svg-icons';


const Modal = ({title, isOpen, onCancel, onSubmit}) => {
	return(
		<Fragment>
		{ isOpen &&
			<Portal>
				<div className={classes.modalOverlay}>
					<div className={classes.modalWindow}>
						<div className={classes.modalHeader}>
							<div>Let's talk. Пообщаемся!</div>
							<FontAwesomeIcon onClick={onCancel} icon={faTimes} className={classes.icon_times} size='lg' aria-hidden="true" />
						</div>
						<div className={classes.modalBody + ' mt-1 ml-5'}>
							<span>Job or coffee. Работа или кофеек</span><br/>
							<FontAwesomeIcon icon={faPhone} className="mt-2" aria-hidden="true" />
							<span className='ml-2'>+380674165386</span> <br/>
							<FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
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





