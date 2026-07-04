import Home from "./components/Home"
import Auth from "./components/Auth"
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

function App() {
  const { currentUser: user } = useSelector((state) => state.user);

  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Auth />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Auth />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        {/* Catch-all route for non-existent paths */}
        <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
      </Routes>
    </>
  )
}

export default App
