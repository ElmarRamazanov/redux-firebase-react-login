import { useState } from "react";
import { login } from "../firebase/firebase.js";
import { login as handleLogin } from "../features/userSlice.jsx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      dispatch(handleLogin(user));
      navigate("/", {
        replace: true,
      });
    }
  };

  return (
    <div className="flex flex-col mx-auto gap-y-4 px-8 w-full max-w-md h-full">
      <div className="flex flex-row gap-x-2 items-center mt-4 text-2xl font-bold text-black -ml-6">
        <img src="../src/images/c.png" alt="Logo" className="w-8 h-8 object-contain" />
        <span>Cadence</span>
      </div>
      <div className="w-[95%] mx-auto -mt-2">
        <h1 className="text-4xl font-bold text-center">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-zinc-200 text-black/80 border border-black/60 outline-none rounded-full"
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 bg-zinc-200 text-black/80 border border-black/60 outline-none rounded-full"
            placeholder="Password"
            required
          />
          <button
            className="bg-black/90 hover:bg-black/60 text-white font-bold py-3 px-12 rounded-full flex flex-row justify-center items-center gap-x-2 cursor-pointer w-full transition-colors"
            type="submit"
          >
            <LogIn size={20} /> Sign In
          </button>
        </form>
        <div className="text-center mt-3">
          <span className="text-black/80 hover:underline cursor-pointer text-md">Forgot your password?</span>
        </div>
        <div className="flex items-center gap-x-2 my-2">
          <div className="w-full h-px bg-black/30"></div>
          <span className="text-black/60 font-medium">OR</span>
          <div className="w-full h-px bg-black/30"></div>
        </div>
        <div className="flex flex-col gap-3">
          <button type="button" className="bg-zinc-200 hover:bg-zinc-300 text-black font-bold py-2.5 px-4 rounded-full flex flex-row justify-center items-center gap-x-4 cursor-pointer w-full transition-colors">
            <FcGoogle size={20} /> Continue with Google
          </button>
          <button type="button" className="bg-zinc-200 hover:bg-zinc-300 text-black font-bold py-2.5 px-4 rounded-full flex flex-row justify-center items-center gap-x-4 cursor-pointer w-full transition-colors">
            <IoLogoFacebook size={20} color="#1877F2" /> Continue with Facebook
          </button>
          <button type="button" className="bg-zinc-200 hover:bg-zinc-300 text-black font-bold py-2.5 px-4 rounded-full flex flex-row justify-center items-center gap-x-4 cursor-pointer w-full transition-colors">
            <FaGithub size={20} /> Continue with Github
          </button>
        </div>
      </div>
    </div>
  );
}
