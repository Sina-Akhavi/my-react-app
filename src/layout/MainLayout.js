import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import MainPanel from '../components/MainPanel';
import { Outlet, useLocation } from 'react-router-dom';
import Modal from '../components/ModalComponent';
import { AuthContext } from '../context/AuthContext';

function MainLayout() {
    const location = useLocation();
    const { isLogoutModalOpen, handleLogout, closeLogoutModal } = useContext(AuthContext);
    
    const noSidebarPaths = ['/contact', '/about', '/what-is-app', '/products'];

    return (
        <div className="wrapper">
            {!noSidebarPaths.includes(location.pathname) && <Sidebar />}
            <MainPanel>
                <Outlet />
            </MainPanel>

            {isLogoutModalOpen && (
                <Modal>
                    <div className="modal-inner">
                        <div className="modal-header">
                            <h5>Confirm Logout</h5>
                            <button className="modal-close" onClick={closeLogoutModal}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to log out?</p>
                        </div>
                        <div className="modal-buttons">
                            <button className="btn btn-danger" onClick={handleLogout}>
                                Yes, Logout
                            </button>
                            <button className="btn btn-secondary" onClick={closeLogoutModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default MainLayout;
