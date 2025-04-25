import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/modal.css';

const Modal = ({ children }) => {
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal">
                {children}
            </div>
        </div>,
        document.getElementById('modal-root') // make sure this exists in public/index.html
    );
};

export default Modal;