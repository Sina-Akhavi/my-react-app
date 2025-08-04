import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar   from "../components/Sidebar";
import MainPanel from "../components/MainPanel";
import Modal     from "../components/ModalComponent";
import { useAuth } from "../context/AuthContext";

function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    isLogoutModalOpen,
    openLogoutModal,
    closeLogoutModal,
    logout,
    user
  } = useAuth();

  // Redirect to login after logout
  useEffect(() => {
    if (user === null) {
      navigate('/login', { replace: true });
    }
  }, [user, navigate]);

  // example: only certain paths show sidebar
  const noSidebarPaths = ["/contact", "/about", "/products", "/what-is-app", "/analytics",
                          "/analyzer/arima-lstm", "/analyzer/forecasting-models", 
                          "/analyzer/arima-evaluation", "/analyzer/arima-forecasting", "/analyzer/lstm-forecasting", "/analyzer/lstm-evaluation"];

  return (
    <div className="wrapper">
      {!noSidebarPaths.includes(location.pathname) && (
        <Sidebar onLogoutClick={openLogoutModal} />
      )}

      <MainPanel>
        <Outlet />
      </MainPanel>

      {isLogoutModalOpen && (
        <Modal>
          <div className="modal-inner">
            <div className="modal-header">
              <h5>Confirm Logout</h5>
              <button className="modal-close" onClick={closeLogoutModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to log out?</p>
            </div>
            <div className="modal-buttons">
              <button className="btn btn-danger" onClick={logout}>
                Yes, Logout
              </button>
              <button
                className="btn btn-secondary"
                onClick={closeLogoutModal}
              >
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
