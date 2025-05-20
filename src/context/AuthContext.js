import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // Attempt to “bootstrap” an access token on page load
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "http://127.0.0.1:8000/api/auth/refresh/token/",
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({}),
          }
        );
        if (!res.ok) throw new Error("no refresh");
        const data = await res.json();
        setAccessToken(data.access);
      } catch {
        // not logged in
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function login(username, password) {
    const res = await fetch("http://127.0.0.1:8000/api/auth/login/", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || "Login failed");
    }
    const { access } = await res.json();
    setAccessToken(access);
  }

  // --- logout
  async function logout() {
    setAccessToken(null);
    setIsLogoutModalOpen(false);
  }

  // --- modal controls
  const openLogoutModal = () => setIsLogoutModalOpen(true);
  const closeLogoutModal = () => setIsLogoutModalOpen(false);

  const value = {
    accessToken,
    login,
    logout,
    // logout-modal API:
    isLogoutModalOpen,
    openLogoutModal,
    closeLogoutModal,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <div>Loading auth…</div> : children}
    </AuthContext.Provider>
  );
}
