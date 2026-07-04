import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

export default function Auth() {
  const location = useLocation();
  const navigate = useNavigate();
  // Initialize state based on the current URL
  const [isLogin, setIsLogin] = useState(location.pathname !== "/register");

  // Keep state in sync if URL changes externally
  useEffect(() => {
    setIsLogin(location.pathname !== "/register");
  }, [location.pathname]);

  const toggleAuth = () => {
    if (isLogin) {
      navigate('/register');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-200 text-black p-4">
      <div className="relative overflow-hidden w-full max-w-5xl bg-zinc-50 rounded-xl shadow-lg flex min-h-175">
        
        {/* Sliding Image Panel */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full z-20 transition-transform duration-700 ease-in-out hidden md:block ${
            !isLogin ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="relative w-full h-full bg-zinc-50 overflow-hidden">
            <img 
              src="../src/images/loginpage.jpg" 
              alt="Auth Background" 
              className="w-full h-full object-cover" 
            />
            <div className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-y-4 p-8 text-center transition-all duration-500`}>
              <div className={`flex flex-col items-center gap-y-2 md:-translate-y-8 transition-opacity duration-500 ${isLogin ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none absolute'}`}>
                <span className="text-white text-5xl font-bold">Join Cadence</span>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-sm">Don't have an account? Sign up to explore more and start your journey.</p>
                <button
                  onClick={toggleAuth}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black transition-colors text-white font-bold py-2.5 px-16 rounded-full cursor-pointer"
                >
                  Sign Up
                </button>
              </div>
              
              <div className={`flex flex-col items-center gap-y-2 md:-translate-y-8 transition-opacity duration-500 ${!isLogin ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none absolute'}`}>
                <span className="text-white text-5xl font-bold">Welcome Back!</span>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-sm">Already have an account? Sign in to access your dashboard.</p>
                <button
                  onClick={toggleAuth}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black transition-colors text-white font-bold py-2.5 px-16 rounded-full cursor-pointer"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Register Panel (Left side) */}
        <div
          className={`absolute top-0 left-0 w-full md:w-1/2 h-full z-10 flex flex-col items-center justify-center transition-all duration-700 ease-in-out bg-zinc-50 ${
            !isLogin ? "translate-x-0 opacity-100" : "translate-x-[-20%] opacity-0 pointer-events-none"
          }`}
        >
          <Register />
          {/* Mobile toggle button */}
          <div className="md:hidden mt-6 flex gap-2">
            <span className="text-black/60">Already have an account?</span>
            <button onClick={toggleAuth} className="font-bold underline text-black">Sign In</button>
          </div>
        </div>

        {/* Login Panel (Right side) */}
        <div
          className={`absolute top-0 right-0 w-full md:w-1/2 h-full z-10 flex flex-col items-center justify-center transition-all duration-700 ease-in-out bg-zinc-50 ${
            isLogin ? "translate-x-0 opacity-100" : "translate-x-[20%] opacity-0 pointer-events-none"
          }`}
        >
          <Login />
          {/* Mobile toggle button */}
          <div className="md:hidden mt-6 flex gap-2">
            <span className="text-black/60">Don't have an account?</span>
            <button onClick={toggleAuth} className="font-bold underline text-black">Sign Up</button>
          </div>
        </div>

      </div>
    </div>
  );
}
