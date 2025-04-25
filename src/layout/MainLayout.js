import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainPanel from '../components/MainPanel';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Modal from '../components/ModalComponent';

function MainLayout() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    
    const noSidebarPaths = ['/contact', '/about', '/what-is-app', '/products'];

    const handleLogout = () => {
        setIsLogoutModalOpen(false);
        navigate('/login');
    };

    return (
        <div className="wrapper">
            {!noSidebarPaths.includes(location.pathname) && <Sidebar />}
            <MainPanel onLogoutClick={() => setIsLogoutModalOpen(true)}>
                <Outlet />
            </MainPanel>

            {isLogoutModalOpen && (
                <Modal>
                    <div className="modal-content">
                        <h5>Confirm Logout</h5>
                        <p>Are you sure you want to log out?</p>
                        <div className="modal-buttons">
                            <button className="btn btn-danger" onClick={handleLogout}>
                                Yes, Logout
                            </button>
                            <button className="btn btn-secondary" onClick={() => setIsLogoutModalOpen(false)}>
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
