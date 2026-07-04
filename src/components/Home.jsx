import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout as logoutHandle } from "../features/userSlice.jsx";

export default function Home() {
  const { currentUser: user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutHandle());
    navigate("/login", { replace: true });
  };

  // Safe guard in case the user navigates here manually without logging in
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 text-black">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 text-black">
      <div className="bg-white p-16 rounded-3xl shadow-lg flex flex-col items-center gap-y-6 min-w-[350px]">
        <h1 className="text-4xl font-bold tracking-tight">Welcome</h1>
        <p className="text-zinc-500 text-lg">{user.email}</p>
        <button 
          onClick={handleLogout}
          className="mt-6 bg-black hover:bg-black/80 transition-colors text-white font-bold py-3 px-12 rounded-full cursor-pointer shadow-md w-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
}